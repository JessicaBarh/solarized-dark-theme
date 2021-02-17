import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';
import { ITranslator } from '@jupyterlab/translation';

/**
 * A plugin for jupyterlab-theme-solarized-dark
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-solarized-dark:plugin',
  requires: [IThemeManager, ITranslator],
  activate: (
    app: JupyterFrontEnd,
    manager: IThemeManager,
    translator: ITranslator
  ) => {
    const trans = translator.load('jupyterlab');
    const style = 'jupyterlab-theme-solarized-dark/index.css';

    manager.register({
      displayName: trans.__('JupyterLab Solarized Dark'),
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
