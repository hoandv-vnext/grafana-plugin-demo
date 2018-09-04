import {PanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';
import './css/text-panel.css!';

const panelDefaults = {
  mode: 'markdown', // 'html', 'markdown', 'text'
  content: '# title',
};
export class TextCtrl extends PanelCtrl {
  
  

  constructor($scope, $injector) {

    super($scope, $injector);
    _.defaultsDeep(this.panel, panelDefaults);
    // this.content = '';
    // this.datashow = '';
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('panel-initialized', this.render.bind(this));
    // this.events.on('render', this.onRender.bind(this));
    
  }

  // onRender() {
  //   // this.datashow = this.content;
    
  //   this.renderingCompleted();
  // }
  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/demo-text-panel/editor.html', 1);
  }


  link(scope, elem) {
    this.events.on('render', () => {

      
    });
  }
  
  // displayText() {
  //   //this.time = moment().format('hh:mm:ss');
  //   //this.$timeout(() => { this.updateClock(); }, 1000);
    
  //   if (this.panel.content) {
  //     this.content = this.panel.content;
  //     return;
  //   }

  // }
 
}

TextCtrl.templateUrl = 'module.html';
