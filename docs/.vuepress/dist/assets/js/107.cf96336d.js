(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{463:function(a,t,s){"use strict";s.r(t);var e=s(16),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"odoo13前端挂件使用说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#odoo13前端挂件使用说明"}},[a._v("#")]),a._v(" odoo13前端挂件使用说明")]),a._v(" "),t("h2",{attrs:{id:"树形查询组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树形查询组件"}},[a._v("#")]),a._v(" 树形查询组件")]),a._v(" "),t("h4",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("本挂件为odoo13原生挂件，并在其基础上进行修改优化。")]),a._v(" "),t("p",[a._v("目前分为两种模式。")]),a._v(" "),t("h3",{attrs:{id:"kanban-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kanban-tree"}},[a._v("#")]),a._v(" Kanban,tree")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("效果图：")]),a._v(" "),t("p",[a._v("Kanban")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230042920.png",alt:"image-20230623004201845"}})]),a._v(" "),t("p",[a._v("Tree")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230042773.png",alt:"image-20230623004216705"}})]),a._v(" "),t("p",[a._v("调用方式：")]),a._v(" "),t("p",[a._v("搜索视图中增加searchpanel标签：")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("search")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("searchpanel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n         "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("field")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("budget_unit_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("string")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("预算单元"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("searchpanel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("search")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"form"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form"}},[a._v("#")]),a._v(" Form")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("form视图下使用树形组件，需去除action中view_mode参数的tree类型，如有指定tree视图id的参数，也需要去除。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230044912.png",alt:"image-20230623004439852"}})]),a._v(" "),t("p",[a._v("在搜索视图的searchpanel标签中使用id 字段")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("search")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("searchpanel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n         "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("field")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("searchpanel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("search")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("效果图")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230045766.png",alt:"image-20230623004506708"}})]),a._v(" "),t("h2",{attrs:{id:"tree视图字段链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree视图字段链接"}},[a._v("#")]),a._v(" tree视图字段链接")]),a._v(" "),t("h4",{attrs:{id:"使用方法-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-2"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("Tree视图字段新增option，如图")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230045599.png",alt:"image-20230623004523554"}})]),a._v(" "),t("p",[a._v("Function_name参数为当前模型所需调用的后台方法名，方法名自定，使用model装饰器。")]),a._v(" "),t("p",[a._v("后台方法定义：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230045667.png",alt:"image-20230623004539625"}})]),a._v(" "),t("p",[a._v("vals中包含当前界面数据及上下文。")]),a._v(" "),t("p",[a._v("效果图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230045017.png",alt:"image-20230623004550961"}})]),a._v(" "),t("h2",{attrs:{id:"tree视图自定义搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree视图自定义搜索"}},[a._v("#")]),a._v(" tree视图自定义搜索")]),a._v(" "),t("h4",{attrs:{id:"使用方法-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-3"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("h3",{attrs:{id:"xml配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xml配置"}},[a._v("#")]),a._v(" xml配置")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("使用时在tree视图的字段上添加Context属性进行配置，具体参数使用说明如下")]),a._v(" "),t("p",[a._v("'field_filter':True, 基本搜索，会在搜索框内加载一个单输入框")]),a._v(" "),t("p",[a._v("'field_filter_range':True, 范围搜索，会在搜索框内加载一个范围搜索框")]),a._v(" "),t("p",[a._v("'field_filter_seq':12 ，对搜索框的位置进行限制左上角开始向后加载，对应seq从小到大")]),a._v(" "),t("p",[a._v("PS：不再需要"),t("strong",[a._v("oe_need_field_filter_render")]),a._v("类名定义")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230046836.png",alt:"image-20230623004641767"}})]),a._v(" "),t("h3",{attrs:{id:"py配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#py配置"}},[a._v("#")]),a._v(" Py配置")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("后台方法定义：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230047356.png",alt:"image-20230623004704295"}})]),a._v(" "),t("h2",{attrs:{id:"批量添加明细行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量添加明细行"}},[a._v("#")]),a._v(" 批量添加明细行")]),a._v(" "),t("h4",{attrs:{id:"使用方法-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-4"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("此挂件针对行上单个m2o进行配置。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230047661.png",alt:"image-20230623004732602"}})]),a._v(" "),t("p",[a._v("res_model参数为该m2o字段模型，res_field为该m2o字段名。")]),a._v(" "),t("p",[a._v("效果图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230047821.png",alt:"image-20230623004742770"}})]),a._v(" "),t("h2",{attrs:{id:"即时保存的添加明细行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#即时保存的添加明细行"}},[a._v("#")]),a._v(" 即时保存的添加明细行")]),a._v(" "),t("h4",{attrs:{id:"使用方法-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-5"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("针对头行结构")]),a._v(" "),t("p",[a._v("行表tree视图中添加")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("control")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("create")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("string")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("add_and_save"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("control")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230048870.png",alt:"image-20230623004822814"}})]),a._v(" "),t("p",[a._v("效果为点击添加明细行时保存整个页面。")]),a._v(" "),t("h2",{attrs:{id:"行禁止打开"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行禁止打开"}},[a._v("#")]),a._v(" 行禁止打开")]),a._v(" "),t("h4",{attrs:{id:"使用方法-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-6"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230048557.png",alt:"image-20230623004838507"}})]),a._v(" "),t("p",[a._v("行tree字段上增加options，内容为’no_edit_no_open’:1")]),a._v(" "),t("h2",{attrs:{id:"tree按钮"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree按钮"}},[a._v("#")]),a._v(" tree按钮")]),a._v(" "),t("h4",{attrs:{id:"使用方法-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-7"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("用于wizard动作在tree上生成按钮")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230049595.png",alt:"image-20230623004924540"}})]),a._v(" "),t("p",[a._v("On_tree为1时，会在tree视图上层区域生成按钮")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230049890.png",alt:"image-20230623004935829"}})]),a._v(" "),t("p",[a._v("On_tree为2时，会在创建按钮的区域生成按钮**（推荐）**")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230049799.png",alt:"image-20230623004949742"}})]),a._v(" "),t("h2",{attrs:{id:"m2o字段选择去重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#m2o字段选择去重"}},[a._v("#")]),a._v(" M2O字段选择去重")]),a._v(" "),t("h4",{attrs:{id:"使用方法-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-8"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230049853.png",alt:"image-20230623004958791"}})]),a._v(" "),t("p",[a._v("语句为widget=o2m_unique”,效果为筛选掉当前页面该字段已被选择过的值。")]),a._v(" "),t("h2",{attrs:{id:"行删除按钮前置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行删除按钮前置"}},[a._v("#")]),a._v(" 行删除按钮前置")]),a._v(" "),t("h4",{attrs:{id:"使用方法-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-9"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230050460.png",alt:""}})]),a._v(" "),t("p",[a._v("语句为delete_forward=”1”,效果为将行上的删除按钮移至第一列。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230050860.png",alt:"image-20230623005029785"}})]),a._v(" "),t("h2",{attrs:{id:"hidezero"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hidezero"}},[a._v("#")]),a._v(" HideZero")]),a._v(" "),t("h4",{attrs:{id:"使用方法-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-10"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("Int,float类型字段值为0时显示为空")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230050268.png",alt:"image-20230623005045211"}})]),a._v(" "),t("h2",{attrs:{id:"复制-编辑-删除按钮按条件隐藏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制-编辑-删除按钮按条件隐藏"}},[a._v("#")]),a._v(" 复制，编辑，删除按钮按条件隐藏")]),a._v(" "),t("h4",{attrs:{id:"使用方法-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-11"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230050828.png",alt:"image-20230623005050774"}})]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("控制")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("复制按钮控制：copy_control")])]),a._v(" "),t("li",[t("p",[a._v("编辑按钮控制：edit_control")])]),a._v(" "),t("li",[t("p",[a._v("删除按钮控制：delete_control")])])])]),a._v(" "),t("h2",{attrs:{id:"one2many完全汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#one2many完全汇总"}},[a._v("#")]),a._v(" one2many完全汇总")]),a._v(" "),t("h4",{attrs:{id:"使用方法-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-12"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("汇总行上该列全部数据，当前系统挂件为汇总当前页数据")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230052888.png",alt:"image-20230623005208811"}})]),a._v(" "),t("h2",{attrs:{id:"domain可视化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domain可视化"}},[a._v("#")]),a._v(" Domain可视化")]),a._v(" "),t("h4",{attrs:{id:"使用方法-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-13"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("使domian可以进行可视化选择，并生成对应domain字符串")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230052891.png",alt:"image-20230623005219838"}})]),a._v(" "),t("p",[a._v("效果如图")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230052725.png",alt:"image-20230623005230663"}})]),a._v(" "),t("h2",{attrs:{id:"domian控制m2o-m2m创建并编辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domian控制m2o-m2m创建并编辑"}},[a._v("#")]),a._v(" Domian控制m2o,m2m创建并编辑")]),a._v(" "),t("h4",{attrs:{id:"使用方法-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-14"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("按条件限制m2o,m2m字段的创建并编辑")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230052296.png",alt:"image-20230623005242239"}})]),a._v(" "),t("h2",{attrs:{id:"many2one字段搜索下拉框展示自定义字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#many2one字段搜索下拉框展示自定义字段"}},[a._v("#")]),a._v(" many2one字段搜索下拉框展示自定义字段")]),a._v(" "),t("h4",{attrs:{id:"使用方法-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-15"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[a._v("/**\n * m2o下拉菜单table化组件\n * 挂件名：widget=\"m2o_table\"\n * table字段定义：options=\"{'select_unique': 0, 'search_field_names': ['name'], 'table_fields':['display_name', 'phone', 'email']}\"\n * search_field_names: 定义搜索时是按表的哪些字段搜索\n * select_unique: 在行表上搜索是否需要选过的不能再选标识，为1的时候不能选择重复的\n */\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230053160.png",alt:"image-20230623005327113"}})]),a._v(" "),t("h4",{attrs:{id:"备注"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[a._v("#")]),a._v(" 备注：")]),a._v(" "),t("p",[a._v("可以用于notebook下的tree页签字段，也可以直接用在一个单独的tree的字段上。")]),a._v(" "),t("h2",{attrs:{id:"form页签中tree上添加数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form页签中tree上添加数据"}},[a._v("#")]),a._v(" Form页签中tree上添加数据")]),a._v(" "),t("h4",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")]),a._v(" "),t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230053576.png",alt:"image-20230623005349514"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230053580.png",alt:"image-20230623005355498"}})]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[a._v('widget="one2many_list"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"form页签中tree上隐藏列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form页签中tree上隐藏列"}},[a._v("#")]),a._v(" Form页签中tree上隐藏列")]),a._v(" "),t("h4",{attrs:{id:"-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[a._v("#")]),a._v(" "),t("img",{attrs:{src:"https://gitee.com/yuhaostudy/blogimages/raw/master/%20images/202306230054225.png",alt:"image-20230623005414155"}})]),a._v(" "),t("p",[a._v("如图所示，当头表中is_adjust_depreciation为假时，行表不显示depreciation_life_before_adjust字段列")])])}),[],!1,null,null,null);t.default=r.exports}}]);