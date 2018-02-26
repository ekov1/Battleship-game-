'use strict';
const factoryModule = require('../common/factory.js');
const initializerModule = require('../common/boardInitializer.js');
const scoreKeeperModule = require('../common/scoreKeeper.js');
const commandExecutorModule = require('../common/commandExecutor.js');

const consoleWriterModule = require('./consoleWriter.js');
const rendererModule = require('./consoleRenderer.js');
const engineModule = require('./engine.js');

const factory = factoryModule.factory();
const scoreKeeper = scoreKeeperModule.scoreKeeper();
const initializer = initializerModule.boardInitializer();
const commandExecutor = commandExecutorModule.commandExecutor();
const renderer = rendererModule.consoleRenderer();
const consoleWriter = consoleWriterModule.consoleWriter();

const engine = engineModule.engine(factory, initializer, consoleWriter, commandExecutor, renderer, scoreKeeper);

engine.start();