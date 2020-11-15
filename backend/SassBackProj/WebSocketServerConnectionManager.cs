﻿using System;
using System.Collections.Concurrent;
using System.Net.WebSockets;

namespace SassBackProj
{
    public class WebSocketServerConnectionManager
    {
        private ConcurrentDictionary<string, WebSocket> _sockets = new ConcurrentDictionary<string, WebSocket>();

        public string AddSocket(WebSocket socket)
        {
            string ConnID = Guid.NewGuid().ToString();
            _sockets.TryAdd(ConnID, socket);
            Console.WriteLine("WebSocketServerConnectionManager-> AddSocket -> ID : " + ConnID);
            return ConnID;
        }

        public ConcurrentDictionary<string, WebSocket> GetAllSockets()
        {
            return _sockets;
        }
    }
}