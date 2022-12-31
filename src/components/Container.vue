<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="fm-style">
    <el-container class="fm2-container">
      <el-main class="fm2-main">
        <el-container>
          <el-aside width="250px">
            <div class="components-list">
              <template v-if="basicFields.length">
<<<<<<< HEAD
                <div class="widget-cate">{{ $t('fm.components.basic.title') }}</div>
                <draggable tag="ul" :list="basicComponents"
                           v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                           @end="handleMoveEnd"
                           @start="handleMoveStart"
                           :move="handleMove"
                >
                  <template v-for="(item, index) in basicComponents">
                    <li v-if="basicFields.indexOf(item.type)>=0" class="form-edit-widget-label"
                        :class="{'no-put': item.type == 'divider'}" :key="index">
                      <a>
                        <i class="icon iconfont" :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                      </a>
                    </li>
                  </template>
                </draggable>
              </template>
              <template v-if="advanceFields.length">
                <div class="widget-cate">{{ $t('fm.components.advance.title') }}</div>
                <draggable tag="ul" :list="advanceComponents"
                           v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                           @end="handleMoveEnd"
                           @start="handleMoveStart"
                           :move="handleMove"
                >
                  <template v-for="(item, index) in advanceComponents">
                    <li v-if="advanceFields.indexOf(item.type) >= 0" class="form-edit-widget-label"
                        :class="{'no-put': item.type == 'table'}" :key="index">
                      <a>
                        <i class="icon iconfont" :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                      </a>
                    </li>
                  </template>
                </draggable>
              </template>
              <template v-if="layoutFields.length">
                <div class="widget-cate">{{ $t('fm.components.layout.title') }}</div>
                <draggable tag="ul" :list="layoutComponents"
                           v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                           @end="handleMoveEnd"
                           @start="handleMoveStart"
                           :move="handleMove"
=======
                <div class="widget-cate">{{$t('fm.components.basic.title')}}</div>
                <draggable tag="ul" :list="basicComponents" 
                  v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                  @end="handleMoveEnd"
                  @start="handleMoveStart"
                  :move="handleMove"
                >
                  <template v-for="(item, index) in basicComponents">
                    <li v-if="basicFields.indexOf(item.type)>=0" class="form-edit-widget-label" :class="{'no-put': item.type == 'divider'}" :key="index">
                      <a>
                        <i class="icon iconfont" :class="item.icon"></i>
                        <span>{{item.name}}</span>
                      </a>
                    </li>
                  </template>                
                </draggable>
              </template>            
              <template v-if="advanceFields.length">
                <div class="widget-cate">{{$t('fm.components.advance.title')}}</div>
                <draggable tag="ul" :list="advanceComponents" 
                  v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                  @end="handleMoveEnd"
                  @start="handleMoveStart"
                  :move="handleMove"
                >
                  <template v-for="(item, index) in advanceComponents">
                    <li v-if="advanceFields.indexOf(item.type) >= 0" class="form-edit-widget-label" :class="{'no-put': item.type == 'table'}" :key="index">
                      <a>
                        <i class="icon iconfont" :class="item.icon"></i>
                        <span>{{item.name}}</span>
                      </a>
                    </li>                  
                  </template>
                </draggable>
              </template>

              
              <template v-if="layoutFields.length">
                <div class="widget-cate">{{$t('fm.components.layout.title')}}</div>
                <draggable tag="ul" :list="layoutComponents" 
                  v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                  @end="handleMoveEnd"
                  @start="handleMoveStart"
                  :move="handleMove"
>>>>>>> master
                >
                  <template v-for="(item, index) in layoutComponents">
                    <li v-if="layoutFields.indexOf(item.type) >=0" class="form-edit-widget-label no-put" :key="index">
                      <a>
                        <i class="icon iconfont" :class="item.icon"></i>
<<<<<<< HEAD
                        <span>{{ item.name }}</span>
                      </a>
                    </li>
                  </template>
                </draggable>
              </template>

            </div>

=======
                        <span>{{item.name}}</span>
                      </a>
                    </li>
                  </template>               
                </draggable>
              </template>
              
            </div>
            
>>>>>>> master
          </el-aside>

          <el-container class="center-container" direction="vertical">
            <el-header class="btn-bar" style="height: 45px;">
              <slot name="action">
              </slot>
              <!--<el-button v-if="upload" type="text" size="medium" icon="el-icon-upload2" @click="handleUpload">{{$t('fm.actions.import')}}</el-button>-->
<<<<<<< HEAD
              <el-button v-if="clearable" type="text" size="medium" icon="el-icon-delete" @click="handleClear">
                {{ $t('fm.actions.clear') }}
              </el-button>
              <el-button v-if="preview" type="text" size="medium" icon="el-icon-view" @click="handlePreview">
                {{ $t('fm.actions.preview') }}
              </el-button>
              <el-button v-if="generateJson" type="text" size="medium" icon="el-icon-tickets"
                         @click="handleGenerateJson">{{ $t('fm.actions.json') }}
              </el-button>
              <el-button v-if="generateCode" type="text" size="medium" icon="el-icon-document"
                         @click="handleGenerateCode">{{ $t('fm.actions.code') }}
              </el-button>
            </el-header>
            <el-main :class="{'widget-empty': widgetForm.list.length == 0}">
              <widget-form v-if="!resetJson" ref="widgetForm" :data="widgetForm"
                           :select.sync="widgetFormSelect"></widget-form>
            </el-main>
          </el-container>

          <el-aside class="widget-config-container">
            <el-container>
              <el-header height="45px">
                <div class="config-tab" :class="{active: configTab=='widget'}" @click="handleConfigSelect('widget')">
                  {{ $t('fm.config.widget.title') }}
                </div>
                <div class="config-tab" :class="{active: configTab=='form'}" @click="handleConfigSelect('form')">
                  {{ $t('fm.config.form.title') }}
                </div>
                <div class="config-tab" :class="{active: configTab=='ui'}" @click="getComponentType('ui')">
                  {{ $t('fm.config.ui.title') }}
                </div>
=======
              <el-button v-if="clearable" type="text" size="medium" icon="el-icon-delete" @click="handleClear">{{$t('fm.actions.clear')}}</el-button>
              <el-button v-if="preview" type="text" size="medium" icon="el-icon-view" @click="handlePreview">{{$t('fm.actions.preview')}}</el-button>
              <el-button v-if="generateJson" type="text" size="medium" icon="el-icon-tickets" @click="handleGenerateJson">{{$t('fm.actions.json')}}</el-button>
              <el-button v-if="generateCode" type="text" size="medium" icon="el-icon-document" @click="handleGenerateCode">{{$t('fm.actions.code')}}</el-button>
            </el-header>
            <el-main :class="{'widget-empty': widgetForm.list.length == 0}">
              <widget-form v-if="!resetJson"  ref="widgetForm" :data="widgetForm" :select.sync="widgetFormSelect"></widget-form>
            </el-main>
          </el-container>
          
          <el-aside class="widget-config-container">
            <el-container>
              <el-header height="45px">
                <div class="config-tab" :class="{active: configTab=='widget'}" @click="handleConfigSelect('widget')">{{$t('fm.config.widget.title')}}</div>
                <div class="config-tab" :class="{active: configTab=='form'}" @click="handleConfigSelect('form')">{{$t('fm.config.form.title')}}</div>
                <div class="config-tab" :class="{active: configTab=='ui'}" @click="getComponentType('ui')">{{$t('fm.config.ui.title')}}</div>
>>>>>>> master
              </el-header>
              <el-main class="config-content">
                <widget-config v-show="configTab=='widget'" :data="widgetFormSelect"></widget-config>
                <ui-pattern v-show="configTab=='ui'" v-bind:ui="ui"></ui-pattern>
                <form-config v-show="configTab=='form'" :data="widgetForm.config"></form-config>
              </el-main>
            </el-container>
<<<<<<< HEAD

          </el-aside>

          <cus-dialog
              :visible="previewVisible"
              @on-close="previewVisible = false"
              ref="widgetPreview"
              width="1000px"
              form
          >
            <generate-form insite="true" @on-change="handleDataChange" v-if="previewVisible" :data="widgetForm"
                           :value="widgetModels" :remote="remoteFuncs" ref="generateForm">

              <template v-slot:blank="scope">
                Width
                <el-input v-model="scope.model.blank.width" style="width: 100px"></el-input>
                Height
                <el-input v-model="scope.model.blank.height" style="width: 100px"></el-input>
=======
            
          </el-aside>

          <cus-dialog
            :visible="previewVisible"
            @on-close="previewVisible = false"
            ref="widgetPreview"
            width="1000px"
            form
          >
            <generate-form insite="true" @on-change="handleDataChange" v-if="previewVisible" :data="widgetForm" :value="widgetModels" :remote="remoteFuncs" ref="generateForm">

              <template v-slot:blank="scope">
                Width <el-input v-model="scope.model.blank.width" style="width: 100px"></el-input>
                Height <el-input v-model="scope.model.blank.height" style="width: 100px"></el-input>
>>>>>>> master
              </template>
            </generate-form>

            <template slot="action">
              <!--获取数据-->
<<<<<<< HEAD
              <el-button type="primary" @click="handleTest">{{ $t('fm.actions.getData') }}</el-button>
              <!--重置-->
              <el-button @click="handleReset">{{ $t('fm.actions.reset') }}</el-button>
=======
              <el-button type="primary" @click="handleTest">{{$t('fm.actions.getData')}}</el-button>
              <!--重置-->
              <el-button @click="handleReset">{{$t('fm.actions.reset')}}</el-button>
>>>>>>> master
            </template>
          </cus-dialog>

          <cus-dialog
<<<<<<< HEAD
              :visible="uploadVisible"
              @on-close="uploadVisible = false"
              @on-submit="handleUploadJson"
              ref="uploadJson"
              width="800px"
              form
          >
            <el-alert type="info" :title="$t('fm.description.uploadJsonInfo')"></el-alert>
            <div id="uploadeditor" style="height: 400px;width: 100%;">{{ jsonEg }}</div>
          </cus-dialog>

          <cus-dialog
              :visible="jsonVisible"
              @on-close="jsonVisible = false"
              ref="jsonPreview"
              width="800px"
              form
          >

            <div id="jsoneditor" style="height: 400px;width: 100%;">{{ jsonTemplate }}</div>

            <template slot="action">
              <el-button type="primary" class="json-btn" :data-clipboard-text="jsonCopyValue">
                {{ $t('fm.actions.copyData') }}
              </el-button>
=======
            :visible="uploadVisible"
            @on-close="uploadVisible = false"
            @on-submit="handleUploadJson"
            ref="uploadJson"
            width="800px"
            form
          >
            <el-alert type="info" :title="$t('fm.description.uploadJsonInfo')"></el-alert>
            <div id="uploadeditor" style="height: 400px;width: 100%;">{{jsonEg}}</div>
          </cus-dialog>

          <cus-dialog
            :visible="jsonVisible"
            @on-close="jsonVisible = false"
            ref="jsonPreview"
            width="800px"
            form
          >
            
            <div id="jsoneditor" style="height: 400px;width: 100%;">{{jsonTemplate}}</div>
            
            <template slot="action">
              <el-button type="primary" class="json-btn" :data-clipboard-text="jsonCopyValue">{{$t('fm.actions.copyData')}}</el-button>
>>>>>>> master

            </template>
          </cus-dialog>

          <cus-dialog
<<<<<<< HEAD
              :visible="codeVisible"
              @on-close="codeVisible = false"
              ref="codePreview"
              width="800px"
              form
              :action="false"
=======
            :visible="codeVisible"
            @on-close="codeVisible = false"
            ref="codePreview"
            width="800px"
            form
            :action="false"
>>>>>>> master
          >
            <!-- <div id="codeeditor" style="height: 500px; width: 100%;">{{htmlTemplate}}</div> -->
            <el-tabs type="border-card" style="box-shadow: none;" v-model="codeActiveName">
              <el-tab-pane label="Vue Component" name="vue">
<<<<<<< HEAD
                <div id="vuecodeeditor" style="height: 500px; width: 100%;">{{ vueTemplate }}</div>
              </el-tab-pane>
              <el-tab-pane label="HTML" name="html">
                <div id="codeeditor" style="height: 500px; width: 100%;">{{ htmlTemplate }}</div>
=======
                <div id="vuecodeeditor" style="height: 500px; width: 100%;">{{vueTemplate}}</div>
              </el-tab-pane>
              <el-tab-pane label="HTML" name="html">
                <div id="codeeditor" style="height: 500px; width: 100%;">{{htmlTemplate}}</div>
>>>>>>> master
              </el-tab-pane>
            </el-tabs>
          </cus-dialog>

        </el-container>
      </el-main>
      <!--<el-footer height="30px" style="font-weight: 600;">Powered by <a target="_blank" href="https://github.com/GavinZhuLei/vue-form-making">vue-form-making</a></el-footer>-->
    </el-container>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import WidgetConfig from './WidgetConfig'
import FormConfig from './FormConfig'
import UiPattern from './UiPattern'
import WidgetForm from './WidgetForm'
import CusDialog from './CusDialog'
import GenerateForm from './GenerateForm'
import Clipboard from 'clipboard'
import {basicComponents, layoutComponents, advanceComponents} from './componentsConfig.js'
import {loadJs, loadCss} from '../util/index.js'
import {request} from '../util/request.js'
import generateCode from './generateCode.js'
<<<<<<< HEAD
import {getComponentType} from '@/api/api.js'
=======
>>>>>>> master

export default {
  name: 'fm-making-form',
  components: {
    Draggable,
    WidgetConfig,
    FormConfig,
    WidgetForm,
    CusDialog,
    UiPattern,
    GenerateForm
  },
  props: {
    preview: {
      type: Boolean,
      default: false
    },
    generateCode: {
      type: Boolean,
      default: false
    },
    generateJson: {
      type: Boolean,
      default: false
    },

    upload: {
<<<<<<< HEAD
      type: Boolean,
=======
      type: Boolean, 
>>>>>>> master
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    basicFields: {
      type: Array,
      default: () => ['input', 'textarea', 'number', 'radio', 'checkbox', 'time', 'date', 'rate', 'color', 'select', 'switch', 'slider', 'text',]
    },
    advanceFields: {
      type: Array,
      default: () => ['blank', 'imgupload', 'editor', 'cascader']
    },
    layoutFields: {
      type: Array,
<<<<<<< HEAD
      default: () => ['grid', 'divider']
    }
  },
  data() {
=======
      default: () => ['grid','divider']
    }
  },
  data () {
>>>>>>> master
    return {
      basicComponents,
      layoutComponents,
      advanceComponents,
      resetJson: false,
      widgetForm: {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'left',
          size: 'small'
        },
      },
      configTab: 'widget',
      widgetFormSelect: null,
<<<<<<< HEAD
      ui: [],
=======
      ui:[],
>>>>>>> master
      previewVisible: false,
      jsonVisible: false,
      codeVisible: false,
      uploadVisible: false,
      remoteFuncs: {
<<<<<<< HEAD
        func_test(resolve) {
=======
        func_test (resolve) {
>>>>>>> master
          setTimeout(() => {
            const options = [
              {id: '1', name: '1111'},
              {id: '2', name: '2222'},
              {id: '3', name: '3333'}
            ]

            resolve(options)
          }, 2000)
        },
<<<<<<< HEAD
        funcGetToken(resolve) {
=======
        funcGetToken (resolve) {
>>>>>>> master
          request.get('http://tools-server.xiaoyaoji.cn/api/uptoken').then(res => {
            resolve(res.uptoken)
          })
        },
<<<<<<< HEAD
        upload_callback(response, file, fileList) {
=======
        upload_callback (response, file, fileList) {
>>>>>>> master
          console.log('callback', response, file, fileList)
        }
      },
      widgetModels: {},
      blank: '',
      htmlTemplate: '',
      vueTemplate: '',
      jsonTemplate: '',
      uploadEditor: null,
      jsonCopyValue: '',
      jsonClipboard: null,
      jsonEg: `{
        "list": [],
        "config": {
        "labelWidth": 100,
        "labelPosition": "top",
        "size": "small"
        }
      }`,
      codeActiveName: 'vue',
    }
  },
<<<<<<< HEAD
  created() {
    this.getComponentType()
  },
  mounted() {
    this._loadComponents()
  },
  methods: {
    _loadComponents() {
=======
  mounted () {
    this._loadComponents()
  },
  methods: {
    _loadComponents () {
>>>>>>> master
      this.basicComponents = this.basicComponents.map(item => {
        return {
          ...item,
          name: this.$t(`fm.components.fields.${item.type}`)
        }
      })
      this.advanceComponents = this.advanceComponents.map(item => {
        return {
          ...item,
          name: this.$t(`fm.components.fields.${item.type}`)
        }
      })
      this.layoutComponents = this.layoutComponents.map(item => {
        return {
          ...item,
          name: this.$t(`fm.components.fields.${item.type}`)
        }
      })
    },
<<<<<<< HEAD
    handleGoGithub() {
      window.location.href = 'https://github.com/GavinZhuLei/vue-form-making'
    },
    handleConfigSelect(value) {

      this.configTab = value
    },
    handleMoveEnd(evt) {
      console.log('end', evt)
    },
    handleMoveStart({oldIndex}) {
      console.log('start', oldIndex, this.basicComponents)
    },
    handleMove() {
      return true
    },
    handlePreview() {
      console.log(this.widgetForm)
      this.previewVisible = true
    },
    handleTest() {
      this.$refs.generateForm.getData().then(data => {
        this.$alert(data, '').catch(e => {
        })
=======
    handleGoGithub () {
      window.location.href = 'https://github.com/GavinZhuLei/vue-form-making'
    },
    handleConfigSelect (value) {

      this.configTab = value
    },
    handleMoveEnd (evt) {
      console.log('end', evt)
    },
    handleMoveStart ({oldIndex}) {
      console.log('start', oldIndex, this.basicComponents)
    },
    handleMove () {
      return true
    },
    handlePreview () {
      console.log(this.widgetForm)
      this.previewVisible = true
    },
    handleTest () {
      this.$refs.generateForm.getData().then(data => {
        this.$alert(data, '').catch(e=>{})
>>>>>>> master
        this.$refs.widgetPreview.end()
      }).catch(e => {
        this.$refs.widgetPreview.end()
      })
    },
<<<<<<< HEAD
    handleReset() {
      this.$refs.generateForm.reset()
    },

    handleGenerateJsons() {
      this.jsonVisible = true
      this.jsonTemplate = this.widgetForm

      console.log(JSON.stringify(this.widgetForm))
      this.$nextTick(() => {

        const editor = ace.edit('jsoneditor')
        editor.session.setMode("ace/mode/json")

        if (!this.jsonClipboard) {
          this.jsonClipboard = new Clipboard('.json-btn')
          this.jsonClipboard.on('success', (e) => {
            this.$message.success(this.$t('fm.message.copySuccess'))
          })
        }
        this.jsonCopyValue = JSON.stringify(this.widgetForm)
      })
    },

    handleGenerateJson() {
=======
    handleReset () {
      this.$refs.generateForm.reset()
    },

    handleGenerateJsons(){
        this.jsonVisible = true
        this.jsonTemplate = this.widgetForm

        console.log(JSON.stringify(this.widgetForm))
        this.$nextTick(() => {

            const editor = ace.edit('jsoneditor')
            editor.session.setMode("ace/mode/json")

            if (!this.jsonClipboard) {
                this.jsonClipboard = new Clipboard('.json-btn')
                this.jsonClipboard.on('success', (e) => {
                    this.$message.success(this.$t('fm.message.copySuccess'))
                })
            }
            this.jsonCopyValue = JSON.stringify(this.widgetForm)
        })
    },

    handleGenerateJson () {
>>>>>>> master
      this.jsonVisible = true
      this.jsonTemplate = this.widgetForm
      console.log(JSON.stringify(this.widgetForm))
      this.$nextTick(() => {

        const editor = ace.edit('jsoneditor')
        editor.session.setMode("ace/mode/json")

        if (!this.jsonClipboard) {
          this.jsonClipboard = new Clipboard('.json-btn')
          this.jsonClipboard.on('success', (e) => {
            this.$message.success(this.$t('fm.message.copySuccess'))
          })
        }
        this.jsonCopyValue = JSON.stringify(this.widgetForm)
      })
    },
<<<<<<< HEAD
    handleGenerateCode() {
=======
    handleGenerateCode () {
>>>>>>> master

      this.codeVisible = true
      this.htmlTemplate = generateCode(JSON.stringify(this.widgetForm), 'html')
      this.vueTemplate = generateCode(JSON.stringify(this.widgetForm), 'vue')
      this.$nextTick(() => {
        const editor = ace.edit('codeeditor')
        editor.session.setMode("ace/mode/html")

        const vueeditor = ace.edit('vuecodeeditor')
        vueeditor.session.setMode("ace/mode/html")
      })
    },
<<<<<<< HEAD
    handleUpload() {
=======
    handleUpload () {
>>>>>>> master
      this.uploadVisible = true
      this.$nextTick(() => {
        this.uploadEditor = ace.edit('uploadeditor')
        this.uploadEditor.session.setMode("ace/mode/json")
      })
    },
<<<<<<< HEAD
    handleUploadJson() {
=======
    handleUploadJson () {
>>>>>>> master
      try {
        this.setJSON(JSON.parse(this.uploadEditor.getValue()))
        this.uploadVisible = false
      } catch (e) {
        this.$message.error(e.message)
        this.$refs.uploadJson.end()
      }
    },
<<<<<<< HEAD
    handleClear() {
=======
    handleClear () {
>>>>>>> master
      this.widgetForm = {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'right',
          size: 'small',
          customClass: ''
        },
      }

      this.widgetFormSelect = {}
    },
<<<<<<< HEAD
    clear() {
      this.handleClear()
    },
    getJSON() {
      return this.widgetForm
    },
    getHtml() {
      return generateCode(JSON.stringify(this.widgetForm))
    },
    setJSON(json) {
      this.widgetForm = json

      if (json.list.length > 0) {
        this.widgetFormSelect = json.list[0]
      }
    },
    handleInput(val) {
      console.log(val)
      this.blank = val
    },
    handleDataChange(field, value, data) {
      console.log(field, value, data)
    },
    //完成获取后端数据展示在前端的数据测试
    getComponentType(value) {
      getComponentType().then(response => {
        this.configTab = value
        this.ui = response.data
        console.log('componentType--->', response.data);
        this.isShow = true
      }).catch(error => {
        console.log(error)
      })
=======
    clear () {
      this.handleClear()
    },
    getJSON () {
      return this.widgetForm
    },
    getHtml () {
      return generateCode(JSON.stringify(this.widgetForm))
    },
    setJSON (json) {
      this.widgetForm = json

      if (json.list.length> 0) {
        this.widgetFormSelect = json.list[0]
      }
    },
    handleInput (val) {
      console.log(val)
      this.blank = val
    },
    handleDataChange (field, value, data) {
      console.log(field, value, data)
    },
    //完成获取后端数据展示在前端的数据测试
    getComponentType(value){
      this.configTab=value;
>>>>>>> master
    }
  },
  watch: {
    widgetForm: {
      deep: true,
      handler: function (val) {
        console.log(this.$refs.widgetForm)
      }
    },
    '$lang': function (val) {
      this._loadComponents()
    }
  }
}
</script>
