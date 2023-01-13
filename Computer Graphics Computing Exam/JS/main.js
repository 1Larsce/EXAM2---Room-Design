//Create a scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
scene.background = new THREE.Color( 0x180233);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.x = 0;
camera.position.y = 5;
camera.position.z = 20;

//Floor 
const floorGeometry = new THREE.BoxGeometry( 90, 3, 30 );
const floorMaterial = new THREE.MeshBasicMaterial( {color: 0x656565} );
const floor = new THREE.Mesh( floorGeometry , floorMaterial );
scene.add( floor );

//Bed  
const bedGeometry = new THREE.BoxGeometry( 25, 0, 30);
const bedMaterial = new THREE.MeshBasicMaterial( {color: 0x970411} );
const bed = new THREE.Mesh( bedGeometry , bedMaterial );
scene.add( bed );

const bedfoamGeometry = new THREE.BoxGeometry( 27, 1, 30);
const bedfoamMaterial = new THREE.MeshBasicMaterial( {color: 0xC4C7CA} );
const bedfoam = new THREE.Mesh( bedfoamGeometry , bedfoamMaterial );
scene.add( bedfoam );

const cornerGeometry = new THREE.BoxGeometry( 31, 0.5, 30);
const cornerMaterial = new THREE.MeshBasicMaterial( {color: 0x624C00} );
const corner = new THREE.Mesh( cornerGeometry , cornerMaterial );
scene.add( corner );

const pillowGeometry = new THREE.CylinderGeometry(20,4,20);
const pillowMaterial = new THREE.MeshBasicMaterial({color: 0xF1F1F1} );
const pillow = new THREE.Mesh(pillowGeometry,pillowMaterial);
scene.add( pillow );

//TV or Monitor 

const tvGeometry = new THREE.BoxGeometry( 18, 11, 0 );
const tvMaterial = new THREE.MeshBasicMaterial( {color: 0xA6ACFA } );
const mytv = new THREE.Mesh( tvGeometry , tvMaterial );
scene.add( mytv );

const tvBorderGeometry = new THREE.BoxGeometry( 20, 13, 0 );
const tvBorderMaterial = new THREE.MeshBasicMaterial( {color: 0x868686 } );
const tvBorder = new THREE.Mesh( tvBorderGeometry , tvBorderMaterial );
scene.add( tvBorder );

const tvpanelGeometry = new THREE.BoxGeometry( 30, 1, 1 );
const tvpanelMaterial = new THREE.MeshBasicMaterial( {color: 0x846A46} );
const tvpanel = new THREE.Mesh( tvpanelGeometry , tvpanelMaterial );
scene.add( tvpanel );
//Lighting
const lightGeometry = new THREE.TorusGeometry( 5, 1, 5, 2 );
const lightMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const light = new THREE.Mesh( lightGeometry, lightMaterial );
scene.add( light );

//Desk // Table
const tableGeometry = new THREE.BoxGeometry(50, 3, 30);
const tableMaterial = new THREE.MeshBasicMaterial({color: 0x6E91F3});
const table = new THREE.Mesh(tableGeometry,tableMaterial);
scene.add(table);

const tablematGeometry = new THREE.BoxGeometry(50, 2, 30);
const tablematMaterial = new THREE.MeshBasicMaterial({color: 0x505050});
const tablemat = new THREE.Mesh(tablematGeometry,tablematMaterial);
scene.add( tablemat );

const tableStandGeometry = new THREE.BoxGeometry(45,100,2);
const tableStandMaterial = new THREE.MeshBasicMaterial({color: 0x454E69}); 
const tableStand = new THREE.Mesh(tableStandGeometry,tableStandMaterial);
scene.add(tableStand);

//PC // Console)
///Part 1 PC
const length = 12, width = 20;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 1,
	depth: 1,
	bevelEnabled: true,
	bevelThickness: 5,
	bevelSize: 1,
	bevelOffset: 5,
	bevelSegments: 1
};

const pcGeometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const pcMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const pc = new THREE.Mesh( pcGeometry, pcMaterial ) ;
scene.add( pc );

///Part 2 PC

const pcboxGeometry = new THREE.BoxGeometry(26, 10, 11);
const pcboxMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
const pcbox = new THREE.Mesh( pcboxGeometry, pcboxMaterial);
scene.add( pcbox );

///Window

const windowsGeometry = new THREE.BoxGeometry(3,40,19);
const windowsMaterial = new THREE.MeshBasicMaterial({color: 0x8F5206});
const windows = new THREE.Mesh( windowsGeometry, windowsMaterial);
scene.add( windows );

const windows2Geometry = new THREE.BoxGeometry(3.5,35,18);
const windows2Material = new THREE.MeshBasicMaterial({color: 0xE3E3E3});
const windows2 = new THREE.Mesh(windows2Geometry, windows2Material);
scene.add( windows2 );


function animate() {
	requestAnimationFrame( animate );
    
    //floor
    floor.position.x=1;
    floor.position.y=-22;
    floor.position.z=5;

    //bed
    bed.position.x=1;
    bed.position.y=-8;
    bed.position.z=5;

    bedfoam.position.x=1;
    bedfoam.position.y=-9;
    bedfoam.position.z=5;

    corner.position.x=1;
    corner.position.y=-10;
    corner.position.z=5;

    pillow.position.x= 1;
    pillow.position.y= -30;
    pillow.position.z= -30;

    //Tv or Monitor
    mytv.position.x=0;
    mytv.position.y=15.5;
    mytv.position.z=2;

    tvBorder.position.x=0;
    tvBorder.position.y=16;
    tvBorder.position.z=1;
  
    tvpanel.position.x=0;
    tvpanel.position.y=8;
    tvpanel.position.z=2;

    light.position.x=0;
    light.position.y=17;
    light.position.z=10;

    //Desk // Table
    table.position.x= -80;
    table.position.y= -20;
    table.position.z= -33;
    
    tablemat.position.x= -80;
    tablemat.position.y= -20;
    tablemat.position.z= -33;

    tableStand.position.x= -80;
    tableStand.position.y= -70;
    tableStand.position.z= -50;
    
    //PC
    pc.position.x= -95;
    pc.position.y= -15;
    pc.position.z= -40;

    pcbox.position.x= -90;
    pcbox.position.y= -15;
    pcbox.position.z= -40;
    renderer.render( scene, camera );

    //Window
    windows.position.x = 90;
    windows.position.y = 15;
    windows.position.z = -31;

    windows2.position.x = 90;
    windows2.position.y = 15;
    windows2.position.z = -31;

}
animate();