var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Auroria CrewLink Server',
  description: 'Auroria CrewLink Server',
  script: 'C:\\Applications\\CrewLinkServer\\crewlink-server\\dist\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
