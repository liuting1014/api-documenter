// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { ApiDocumenterCommandLine } from './ApiDocumenterCommandLine';
import { BaseAction } from './BaseAction';
import { HtmlDocumenter } from '../documenters/HtmlDocumenter';
import { ApiModel } from '@microsoft/api-extractor-model';

export class HtmlAction extends BaseAction {
  public constructor(parser: ApiDocumenterCommandLine) {
    super({
      actionName: 'html',
      summary: 'Generate documentation as Html files (*.html)',
      documentation: 'Generates API documentation as a collection of files in'
        + ' Html format, suitable for example for publishing on a website.'
    });
  }

  protected onExecute(): Promise<void> { // override
    const apiModel: ApiModel = this.buildApiModel();

    const htmlDocumenter: HtmlDocumenter = new HtmlDocumenter(apiModel, undefined);
    htmlDocumenter.generateFiles(this.outputFolder);
    return Promise.resolve();
  }
}
