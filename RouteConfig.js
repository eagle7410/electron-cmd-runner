const Send             = require('./libs/Send');
const Cmd              = require('./libs/Cmd');
const ConsoleParser    = require('./libs/ConsoleParser');
const timeout          = require('./libs/timeout');
const SocketServer     = require('./libs/SocketServer');
const commands         = require('./constants/dockerCommand');
const FileSystemDialog = require('./libs/FileSystemDialog');
const LogManager       = require('./libs/LogManager');
const ShellSession     = require('shell-session');

let windowMain = null;
let shell = null;

LogManager.init();

const route = (route, handler, method) => ({
	route,
	method,
	handler : async (res, action, data) => {
		try {
			await handler(res, action, data);
		} catch (e) {
			console.error(e);
			Send.err(res, action, e.message ? e.message : e);
		}
	}
});

const config = [

];

class RouteConfig {
	static setWindowMain (window) {
		windowMain = window;

		return this;
	}
	static get () {
		return config;
	}
}

module.exports = RouteConfig;
