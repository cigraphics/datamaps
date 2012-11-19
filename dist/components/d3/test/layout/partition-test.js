function metadata(e){var t={};return"x"in e&&(t.x=e.x),"y"in e&&(t.y=e.y),"dx"in e&&(t.dx=e.dx),"dy"in e&&(t.dy=e.dy),t}require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.layout.partition");suite.addBatch({partition:{topic:function(){return d3.layout.partition},"ignores zero values":function(e){var t=e().size([3,3]);assert.deepEqual(t.nodes({children:[{value:1},{value:0},{value:2},{children:[{value:0},{value:0}]}]}).map(metadata),[{x:0,y:0,dx:3,dy:1},{x:2,y:1,dx:1,dy:1},{x:3,y:1,dx:0,dy:1},{x:0,y:1,dx:2,dy:1},{x:3,y:1,dx:0,dy:1},{x:3,y:2,dx:0,dy:1},{x:3,y:2,dx:0,dy:1}])},"can handle an empty children array":function(e){var t=e();assert.deepEqual(t.nodes({children:[]}).map(metadata),[{x:0,y:0,dx:1,dy:1}]),assert.deepEqual(t.nodes({children:[{children:[]},{value:1}]}).map(metadata),[{x:0,y:0,dx:1,dy:.5},{x:1,y:.5,dx:0,dy:.5},{x:0,y:.5,dx:1,dy:.5}])}}}),suite.export(module)