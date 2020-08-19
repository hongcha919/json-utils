/**
 * dynamicDataAnalyzer: 根据当前的json，统计当前json里面用到的动态数据源情况
 * 【方法参数说明】
 * jsonData: json数据内容，必填项
 * 【返回数据格式说明】
 * dynamicDataAnalyzer:
 * {
  widget1: [
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        },
        pageId: {
          title: '页面id',
          scope: 'hash',
          name: 'pId',
          value: '111' // 默认值
        }
      },
    },
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        },
        pageId: {
          title: '页面id',
          scope: 'hash',
          name: 'pId',
          value: '111' // 默认值
        }
      }
    }
  ],
  widget2: [
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        }
      }
    }
  ]
}
 */
import { isArray, isObject } from '$utils/typeof';

export function dynamicDataAnalyzer(curJsonData, analyzerResult) {
  let curAnalyzerResult = analyzerResult || [];
  // 根据当前schem数据分析使用到的元数据情况
  if (curJsonData && JSON.stringify(curJsonData) !== '{}') {
    if (isObject(curJsonData)) {
      // 判断是否是动态数据类型
      if (curJsonData.type && curJsonData.type === 'remote' && curJsonData.config && isObject(curJsonData.config)) {
        curAnalyzerResult.push({
          'dataName': curJsonData.config.dataName,
          'body': curJsonData.config.body,
        });
      } else {
        const curJsonDataList = Object.keys(curJsonData);
        curJsonDataList.map((jsonKey) => {
          dynamicDataAnalyzer(curJsonData[jsonKey], curAnalyzerResult)
        })
      }
    } else if (isArray(curJsonData)) {
      curJsonData.map((jsonDataItem) => {
        dynamicDataAnalyzer(jsonDataItem, curAnalyzerResult)
      })
    }
  }
  return curAnalyzerResult;
}