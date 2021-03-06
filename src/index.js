import * as React from 'react';
import ReactDOM from 'react-dom';
import { schema2json } from './main'; // '../dist/index.esm';
import JSONEditor from '@wibetter/json-editor';
import '@wibetter/json-editor/dist/index.css';
import './index.scss';

/**
 * json-utils的测试Demo
 */
class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jsonSchema0: {
        type: 'object',
        format: 'object',
        title: '对象类型',
        description: '',
        properties: {
          func: {
            type: 'object',
            format: 'object',
            title: '对象类型',
            description: '',
            properties: {
              activeIndex: {
                type: 'number',
                title: '数值',
                format: 'number',
                default: 1,
                minimum: 0,
                maximum: 1000,
                description: '',
                isRequired: false,
                readOnly: false,
              },
              activeIndex_6: {
                type: 'number',
                title: '数值',
                format: 'number',
                default: 1,
                minimum: 0,
                maximum: 1000,
                description: '',
                isRequired: false,
                readOnly: false,
              },
              tabList: {
                type: 'array',
                format: 'array',
                title: '数组',
                description: '',
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  properties: {
                    title: {
                      type: 'string',
                      title: '单文本框',
                      format: 'input',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                    link: {
                      type: 'string',
                      title: '单文本框',
                      format: 'input',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                  },
                },
              },
              tabList_5: {
                type: 'array',
                format: 'array',
                title: '数组',
                description: '',
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  properties: {
                    title: {
                      type: 'string',
                      title: '单文本框',
                      format: 'input',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                    link: {
                      type: 'string',
                      title: '单文本框',
                      format: 'input',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                  },
                },
              },
            },
          },
          style: {
            type: 'object',
            format: 'object',
            title: '对象类型',
            description: '',
            properties: {
              backColor: {
                type: 'string',
                title: '颜色值',
                format: 'color',
                default: '#ffffff',
                description: '',
                isRequired: false,
                readOnly: false,
              },
              backColor_7: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_3: {
                type: 'object',
                format: 'quantity',
                title: '单位计量输入',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 50,
                    minimum: 0,
                    maximum: 1000,
                    description: '',
                    isRequired: false,
                    readOnly: false,
                  },
                  quantity: {
                    type: 'string',
                    format: 'typeSelect',
                    default: 'px',
                    enum: ['px', 'rem', 'em', '%'],
                    enumextra: ['px', 'rem', 'em', '%'],
                    title: '单位类型',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['unit', 'quantity'],
                propertyOrder: ['unit', 'quantity'],
              },
            },
          },
          data: {
            type: 'object',
            format: 'object',
            title: '对象类型',
            description: '',
            properties: {
              field_3: {
                type: 'object',
                format: 'event',
                title: '事件',
                isRequired: false,
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'emit',
                    format: 'typeSelect',
                    enum: ['on', 'emit'],
                    enumextra: ['on', 'emit'],
                    title: '事件类型',
                    isRequired: false,
                    readOnly: false,
                  },
                  trigger: {
                    type: 'string',
                    format: 'input',
                    default: 'eventName',
                    title: '触发事件',
                    description: '用于输入触发事件的名称',
                    placeholder: '请输入触发事件的名称',
                    isRequired: false,
                    readOnly: false,
                  },
                  eventData: {
                    type: 'string',
                    title: '事件数据',
                    format: 'json',
                    default: '{}',
                    description: '传递给触发事件的数据对象',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['type', 'trigger', 'eventData'],
                propertyOrder: ['type', 'trigger', 'eventData'],
              },
              field_3_13: {
                type: 'object',
                format: 'event',
                title: '事件',
                isRequired: false,
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'on',
                    format: 'typeSelect',
                    enum: ['on', 'emit'],
                    enumextra: ['on', 'emit'],
                    title: '事件类型',
                    isRequired: false,
                    readOnly: false,
                  },
                  register: {
                    type: 'string',
                    format: 'input',
                    default: 'eventName',
                    title: '注册事件',
                    description: '用于输入注册事件的名称',
                    placeholder: '请输入注册事件的名称',
                    isRequired: false,
                    readOnly: false,
                  },
                  actionFunc: {
                    type: 'string',
                    title: '执行函数',
                    format: 'codearea',
                    default: '() => {}',
                    description: '',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['type', 'register', 'actionFunc'],
                propertyOrder: ['type', 'register', 'actionFunc'],
              },
              field_1: {
                type: 'object',
                format: 'datasource',
                title: '数据源',
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'local',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['local', 'remote'],
                    title: '数据源类型',
                  },
                  data: {
                    type: 'string',
                    title: '本地json数据',
                    placeholder: '请输入静态json数据',
                    format: 'json',
                    default: '{}',
                    description: '用于设置本地的静态json数据',
                    isRequired: true,
                  },
                  filter: {
                    type: 'string',
                    title: '过滤器',
                    format: 'codearea',
                    default: '() => {}',
                    description: '用于定义过滤当前数据的函数',
                    isRequired: true,
                  },
                },
                required: ['type', 'data', 'filter'],
                propertyOrder: ['type', 'data', 'filter'],
              },
              field_1_10: {
                type: 'object',
                format: 'datasource',
                title: '数据源',
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'remote',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['local', 'remote'],
                    title: '数据源类型',
                  },
                  data: {
                    type: 'string',
                    title: '远程json数据',
                    placeholder: '请输入远程json数据源地址',
                    format: 'url',
                    default: 'http://xxx',
                    isRequired: true,
                    description: '用于设置获取元素数据的请求地址',
                  },
                  filter: {
                    type: 'string',
                    title: '过滤器',
                    format: 'codearea',
                    default: '() => {}',
                    description: '用于定义过滤当前数据的函数',
                    isRequired: true,
                  },
                },
                required: ['type', 'data', 'filter'],
                propertyOrder: ['type', 'data', 'filter'],
              },
              field_4: {
                type: 'array',
                format: 'array',
                title: '数组',
                description: '',
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  properties: {
                    name: 1,
                    field_8: 1,
                  },
                },
              },
            },
          },
        },
      }, // 通用schema类型-计量单位类型 显示  / update ok
      jsonSchema1: {
        type: 'object',
        title: '对象类型',
        format: 'object',
        isRequired: false,
        default: '',
        description: '',
        placeholder: '',
        readOnly: false,
        properties: {
          a: {
            type: 'string',
            title: '单文本框',
            format: 'input',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
          },
          field_2: {
            type: 'string',
            title: '单文本框',
            format: 'input',
            default: '',
            description: '',
            placeholder: '',
            isRequired: false,
            readOnly: false,
          },
          field_3: {
            type: 'string',
            title: '单文本框',
            format: 'input',
            default: '',
            description: '',
            placeholder: '',
            isRequired: false,
            readOnly: false,
          },
        },
        required: ['a', 'field_2', 'field_3'],
        propertyOrder: ['a', 'field_2', 'field_3'],
      }, // 通用schema类型-对象类型 显示  / update ok
      jsonSchema2: {
        type: 'array',
        title: '数组',
        format: 'array',
        isRequired: false,
        default: '',
        description: '',
        placeholder: '',
        readOnly: false,
        items: {
          type: 'object',
          format: 'object',
          title: '数组项',
          readOnly: false,
          isRequired: false,
          description: '',
          properties: {
            name: {
              type: 'string',
              format: 'input',
              title: '名字',
              isRequired: false,
              default: '',
              description: '',
              placeholder: '',
              readOnly: false,
            },
            field_1: {
              type: 'string',
              title: '单文本框',
              format: 'input',
              default: '',
              description: '',
              placeholder: '',
              isRequired: false,
              readOnly: false,
            },
          },
          required: ['name', 'field_1'],
          propertyOrder: ['name', 'field_1'],
        },
      }, // 通用schema类型-数组类型 显示  / update ok
      jsonSchema3: {
        type: 'object',
        title: '数据源',
        format: 'datasource',
        isRequired: false,
        default: '',
        description: '',
        placeholder: '',
        readOnly: false,
        properties: {
          type: {
            type: 'string',
            default: 'local',
            format: 'typeSelect',
            enum: ['local', 'remote'],
            enumextra: ['local', 'remote'],
            title: '数据源类型',
          },
          data: {
            type: 'string',
            format: 'json',
            default: 'local',
            readOnlyInJson: false,
            title: '本地静态json数据',
          },
          filter: {
            type: 'string',
            format: 'codearea',
            default: 'return data;',
            title: '过滤器',
          },
        },
        required: ['type', 'data', 'filter'],
        propertyOrder: ['type', 'data', 'filter'],
      }, // 通用schema类型-datasource类型 显示  / update ok
      jsonSchema4: {
        type: 'object',
        format: 'event',
        title: '事件',
        isRequired: false,
        readOnly: false,
        properties: {
          type: {
            type: 'string',
            default: 'emit',
            format: 'typeSelect',
            enum: ['on', 'emit'],
            enumextra: ['on', 'emit'],
            title: '事件类型',
            isRequired: false,
            readOnly: false,
          },
          trigger: {
            type: 'string',
            format: 'input',
            default: 'eventName',
            title: '触发事件',
            description: '用于输入触发事件的名称',
            placeholder: '请输入触发事件的名称',
            isRequired: false,
            readOnly: false,
          },
          eventData: {
            type: 'string',
            title: '事件数据',
            format: 'json',
            default: '{}',
            description: '传递给触发事件的数据对象',
            isRequired: false,
            readOnly: false,
          },
        },
        required: ['type', 'trigger', 'eventData'],
        propertyOrder: ['type', 'trigger', 'eventData'],
      }, // 通用schema类型-事件类型 显示  / update ok
      jsonSchema5: {
        type: 'object',
        format: 'func',
        title: '功能设置',
        readOnly: false,
        properties: {
          field_1: {
            type: 'string',
            title: '单文本框',
            format: 'input',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
          },
          field_2: {
            type: 'boolean',
            title: '布尔值',
            format: 'boolean',
            isRequired: false,
            default: true,
            description: '',
            placeholder: '',
            readOnly: false,
          },
          field_3: {
            type: 'string',
            title: '日期',
            format: 'date',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
          },
          field_4: {
            type: 'string',
            title: '日期',
            format: 'date-time',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
          },
          field_5: {
            type: 'string',
            title: '时间',
            format: 'time',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
          },
          field_6: {
            type: 'string',
            title: 'URL',
            format: 'url',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
          },
          field_7: {
            type: 'string',
            title: '多行文本框',
            format: 'textarea',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
          },
          field_8: {
            type: 'number',
            title: '数值',
            format: 'number',
            isRequired: false,
            default: 50,
            description: '',
            placeholder: '',
            readOnly: false,
            minimum: 0,
            maximum: 100,
          },
          field_9: {
            type: 'string',
            title: '单选',
            format: 'radio',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
            items: {
              type: 'string',
              enum: ['a', 'b', 'c'],
              enumextra: ['选项a', '选项b', '选项c'],
              format: 'string',
            },
          },
          field_10: {
            type: 'array',
            title: '多选',
            format: 'select',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
            items: {
              type: 'string',
              enum: ['a', 'b', 'c'],
              enumextra: ['选项a', '选项b', '选项c'],
              format: 'string',
            },
          },
          field_11: {
            type: 'array',
            title: '数组',
            format: 'array',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
            items: {
              type: 'object',
              format: 'object',
              title: '数组项',
              readOnly: false,
              isRequired: false,
              description: '',
              properties: {
                name: {
                  type: 'string',
                  format: 'input',
                  title: '名字',
                  isRequired: false,
                  default: '',
                  description: '',
                  placeholder: '',
                  readOnly: false,
                },
                field_1: {
                  type: 'string',
                  title: '单文本框',
                  format: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                  isRequired: false,
                  readOnly: false,
                },
              },
              required: ['name', 'field_1'],
              propertyOrder: ['name', 'field_1'],
            },
          },
          field_12: {
            type: 'object',
            title: '对象类型',
            format: 'object',
            isRequired: false,
            default: '',
            description: '',
            placeholder: '',
            readOnly: false,
            properties: {
              a: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_2: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_3: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['a', 'field_2', 'field_3'],
            propertyOrder: ['a', 'field_2', 'field_3'],
          },
        },
        required: [
          'field_1',
          'field_2',
          'field_3',
          'field_4',
          'field_5',
          'field_6',
          'field_7',
          'field_8',
          'field_9',
          'field_10',
          'field_11',
          'field_12',
        ],
        propertyOrder: [
          'field_1',
          'field_2',
          'field_3',
          'field_4',
          'field_5',
          'field_6',
          'field_7',
          'field_8',
          'field_9',
          'field_10',
          'field_11',
          'field_12',
        ],
      }, // 通用schema类型 显示  / update ok
      jsonSchema: {
        type: 'object',
        title: 'empty object',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            description: '功能设置',
            readOnly: true,
            properties: {},
            required: [],
            title: '功能设置',
            propertyOrder: [],
          },
          style: {
            type: 'object',
            format: 'style',
            description: '样式设置',
            readOnly: true,
            properties: {
              tabsType: {
                type: 'string',
                title: 'tabs类型',
                format: 'radio',
                items: {
                  type: 'string',
                  enum: ['line', 'card'],
                  enumextra: ['默认类型', '卡片类型'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['tabsType'],
            title: '样式设置',
            propertyOrder: ['tabsType'],
          },
          data: {
            type: 'object',
            format: 'data',
            description: '数据设置',
            readOnly: true,
            properties: {
              tabNameList: {
                type: 'array',
                format: 'array',
                title: '面板 TitleList',
                description: '',
                isRequired: false,
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  isRequired: false,
                  readOnly: false,
                  properties: {
                    tabName: {
                      type: 'string',
                      format: 'input',
                      title: '面板 Title',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                  },
                  required: ['tabName'],
                  propertyOrder: ['tabName'],
                },
              },
            },
            required: ['tabNameList'],
            title: '数据设置',
            propertyOrder: ['tabNameList'],
          },
          widgets: {
            type: 'object',
            format: 'widgets',
            title: '嵌套区块',
            readOnly: false,
            properties: {
              widgetUUID: {
                type: 'string',
                title: '嵌套区块UUID',
                format: 'input',
                isRequired: false,
                default: 'box-widget-e33b3258-6d73-4c07-a6e1-4f67457dafd3',
                description: '唯一标识，用于标记当前可嵌套区块',
                placeholder: '',
                readOnly: false,
              },
              embedWidgetList: {
                type: 'array',
                title: '内嵌组件数据集合',
                format: 'array',
                isRequired: false,
                description: '',
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  readOnly: false,
                  isRequired: false,
                  description: '',
                  properties: {
                    embedWidgetData: {
                      type: 'string',
                      format: 'json',
                      title: '内嵌组件数据',
                      isRequired: true,
                      default: '{}',
                      description: '',
                      placeholder: '',
                      readOnly: true,
                    },
                    embedWidgetKey: {
                      type: 'string',
                      format: 'input',
                      title: '内嵌组件Key',
                      isRequired: true,
                      default: '',
                      description: '',
                      placeholder: '',
                      readOnly: false,
                    },
                  },
                  required: ['embedWidgetData', 'embedWidgetKey'],
                  propertyOrder: ['embedWidgetKey', 'embedWidgetData'],
                },
              },
            },
            required: ['widgetUUID', 'embedWidgetList'],
            propertyOrder: ['widgetUUID', 'embedWidgetList'],
          },
        },
        required: ['func', 'style', 'data', 'widgets'],
        format: 'object',
        propertyOrder: ['func', 'style', 'data', 'widgets'],
        lastUpdateTime: '2020-10-22T09:44:01.419Z',
      },
      jsonSchema7: {
        type: 'object',
        title: 'empty object',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            description: '功能设置',
            readOnly: true,
            properties: {
              mainTitle: {
                type: 'string',
                description: '设置主title',
                format: 'input',
                title: '设置主title',
              },
              subTitle: {
                type: 'string',
                description: '设置副title',
                format: 'input',
                title: '设置副title',
              },
              backtitle: {
                type: 'string',
                description: '图标title',
                format: 'input',
                title: '图标title',
              },
              bottomIconUrl: {
                type: 'string',
                format: 'url',
                description: '底部图标',
                title: '底部图标',
              },
              backIcon: {
                type: 'string',
                format: 'url',
                description: '背景图标',
                title: '背景图标',
              },
              backImageUrl: {
                type: 'string',
                format: 'url',
                description: '背景图',
                title: '背景图',
              },
            },
            required: [
              'mainTitle',
              'subTitle',
              'backtitle',
              'bottomIconUrl',
              'backIcon',
              'backImageUrl',
            ],
            title: '功能设置',
            propertyOrder: [
              'mainTitle',
              'subTitle',
              'backtitle',
              'bottomIconUrl',
              'backIcon',
              'backImageUrl',
            ],
          },
          style: {
            type: 'object',
            format: 'style',
            description: '样式设置',
            readOnly: true,
            properties: {
              isShowSubTitle: {
                type: 'string',
                format: 'radio',
                description: '展示副标题',
                title: '展示副标题',
                items: {
                  type: 'string',
                  enum: ['show', 'hide'],
                  enumextra: ['展示', '隐藏'],
                  format: 'string',
                },
              },
              wrapPadding: {
                type: 'object',
                format: 'quantity',
                title: '单位计量',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 50,
                    minimum: 0,
                    maximum: 1000,
                    description: '',
                    isRequired: false,
                    readOnly: false,
                  },
                  quantity: {
                    type: 'string',
                    format: 'typeSelect',
                    default: 'px',
                    enum: ['px', 'rem', 'em', '%'],
                    enumextra: ['px', 'rem', 'em', '%'],
                    title: '单位类型',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['unit', 'quantity'],
                propertyOrder: ['unit', 'quantity'],
              },
              backColor: {
                type: 'string',
                format: 'color',
                description: '背景色',
                title: '背景色',
              },
              titlePosition: {
                type: 'array',
                format: 'select',
                items: {
                  type: 'string',
                  enum: ['left', 'center', 'right'],
                  enumextra: ['居左', '居中', '居右'],
                  format: 'string',
                },
                uniqueItems: true,
                description: '标题位置',
                title: '标题位置',
              },
            },
            required: [
              'isShowSubTitle',
              'wrapPadding',
              'backColor',
              'titlePosition',
            ],
            title: '样式设置',
            propertyOrder: [
              'isShowSubTitle',
              'wrapPadding',
              'backColor',
              'titlePosition',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            description: '数据设置',
            readOnly: true,
            properties: {
              event: {
                type: 'object',
                format: 'event',
                title: '事件',
                isRequired: false,
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'emit',
                    format: 'typeSelect',
                    enum: ['on', 'emit'],
                    enumextra: ['on', 'emit'],
                    title: '事件类型',
                    isRequired: false,
                    readOnly: false,
                  },
                  trigger: {
                    type: 'string',
                    format: 'input',
                    default: 'eventName',
                    title: '触发事件',
                    description: '用于输入触发事件的名称',
                    placeholder: '请输入触发事件的名称',
                    isRequired: false,
                    readOnly: false,
                  },
                  eventData: {
                    type: 'string',
                    title: '事件数据',
                    format: 'json',
                    default: '{}',
                    description: '传递给触发事件的数据对象',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['type', 'trigger', 'eventData'],
                propertyOrder: ['type', 'trigger', 'eventData'],
              },
              getData: {
                type: 'object',
                format: 'datasource',
                title: '数据源',
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'local',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['local', 'remote'],
                    title: '数据源类型',
                  },
                  data: {
                    type: 'string',
                    title: '本地json数据',
                    placeholder: '请输入静态json数据',
                    format: 'json',
                    default: 'local',
                    description: '用于设置本地的静态json数据',
                    isRequired: true,
                  },
                  filter: {
                    type: 'string',
                    title: '过滤器',
                    format: 'codearea',
                    default: 'return data;',
                    description: '用于定义过滤当前数据的函数',
                    isRequired: true,
                  },
                },
                required: ['type', 'data', 'filter'],
                propertyOrder: ['type', 'data', 'filter'],
              },
            },
            required: ['event', 'getData'],
            title: '数据设置',
            propertyOrder: ['event', 'getData'],
          },
          widgets: {
            type: 'object',
            format: 'widgets',
            title: '嵌套区块',
            readOnly: false,
            properties: {
              widgetUUID: {
                type: 'string',
                title: '嵌套区块UUID',
                format: 'input',
                isRequired: false,
                default: 'box-widget-e33b3258-6d73-4c07-a6e1-4f67457dafd3',
                description: '唯一标识，用于标记当前可嵌套区块',
                placeholder: '',
                readOnly: false,
              },
              embedWidgetA: {
                type: 'string',
                title: '内嵌区块A',
                format: 'widget',
                default: '{}',
                description: '用于存放内嵌区块的渲染数据',
                isRequired: false,
                readOnly: true,
              },
              embedWidgetB: {
                type: 'string',
                title: '内嵌区块B',
                format: 'widget',
                default: '{}',
                description: '用于存放内嵌区块的渲染数据',
                isRequired: false,
                readOnly: true,
              },
            },
            required: ['widgetUUID', 'embedWidgetA', 'embedWidgetB'],
            propertyOrder: ['widgetUUID', 'embedWidgetA', 'embedWidgetB'],
          },
        },
        required: ['func', 'style', 'data', 'widgets'],
        format: 'object',
        propertyOrder: ['func', 'style', 'data', 'widgets'],
        lastUpdateTime: '2020-10-13T09:19:20.980Z',
      }, // 用于区块配置的schema  显示 ok / update ok
      jsonData: {
        func: {},
        style: {
          tabsType: 'line',
        },
        data: {
          tabNameList: [
            {
              tabName: '面板A',
            },
            {
              tabName: '面板B',
            },
            {
              tabName: '面板C',
            },
          ],
        },
        widgets: {
          widgetUUID: '9341fabf-d7ec-421d-a1af-04c61dc58b4b',
          embedWidgetList: [
            {
              embedWidgetKey: 'embedWidgetA',
              embedWidgetData: {},
            },
            {
              embedWidgetKey: 'embedWidgetB',
              embedWidgetData: {},
            },
            {
              embedWidgetKey: 'embedWidgetC',
              embedWidgetData: {},
            },
          ],
        },
      },
      wideScreen: true,
      jsonView: true,
    };
  }

  render() {
    const { jsonSchema, jsonData, wideScreen, jsonView } = this.state;

    const testData = schema2json(jsonSchema, jsonData);

    console.log(testData);

    return (
      <>
        <div className="title-container">
          <div className="title2-box">
            <p>
              <b>当前的JSON数据内容</b>
            </p>
          </div>
        </div>
        <div className="json-action-container">
          <div className="json-editor-box">
            <JSONEditor
              jsonView={jsonView} // code模式
              wideScreen={wideScreen} // 宽屏和小屏的配置项
              schemaData={jsonSchema}
              jsonData={jsonData}
              onChange={(newJsonData) => {
                console.log('jsonDataChange', JSON.stringify(newJsonData));
                this.setState({
                  jsonData: newJsonData,
                });
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>json-utils Demo</h1>

    <br />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
