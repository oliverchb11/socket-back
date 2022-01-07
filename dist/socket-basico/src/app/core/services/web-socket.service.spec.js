"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const web_socket_service_1 = require("./web-socket.service");
describe('WebSocketService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(web_socket_service_1.WebSocketService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
