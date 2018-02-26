'use strict';

const $ = require('jquery');

const factoryModule = require('../../common/factory.js');
const initializerModule = require('../../common/boardInitializer.js');
const commandExecutorModule = require('../../common/commandExecutor.js');
const scoreKeeperModule = require('../../common/scoreKeeper.js');

const boardRendererModule = require('./boardRenderer.js');
const textWriterModule = require('./textWriter.js');
const engineModule = require('./engine.js');

const factory = factoryModule.factory();
const initializer = initializerModule.boardInitializer();
const boardRenderer = boardRendererModule.boardRenderer();
const textWriter = textWriterModule.textWriter($);
const commandExecutor = commandExecutorModule.commandExecutor();
const scoreKeeper = scoreKeeperModule.scoreKeeper();

const engine = engineModule.engine($, factory, initializer, boardRenderer, commandExecutor, textWriter, scoreKeeper);

engine.start();