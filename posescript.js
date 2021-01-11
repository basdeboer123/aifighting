function onResults(results) {
  comm = 0;
  center_refresh ++;
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
                 {color: '#00FF00', lineWidth: 4});
  drawLandmarks(canvasCtx, results.poseLandmarks,
                {color: '#FF0000', lineWidth: 2});

  const kekw = results.poseLandmarks[10]['y'];
  center_update = center_update + kekw
  if (kekw != 0 && cdtime <= 0 && comm == 0) {
	if ((kekw - centery) < -0.03){
			console.log("Spring");
			cdtime = 60;
			jump()
		}
	else if ((kekw - centery) > 0.05 ){
			console.log("Buk");
			cdtime = 60;
			comm = -1;
			jumpdown()
		}
	}
  else if (prevkekw == 0){
		centery = kekw;


  }
  else{
		cdtime--;
	    comm = 0;
  };
  if ((center_refresh % 5) == 0){
		centery = center_update/5;
		center_update = 0;
	};
  if ((cdtime == 0) && (results.poseLandmarks[19]['y'] || results.poseLandmarks[20]['y'])){
	  if ((results.poseLandmarks[19]['y'] < results.poseLandmarks[11]['y'])||(results.poseLandmarks[20]['y'] < results.poseLandmarks[10]['y'])){
		  console.log("PEW PEW");
		  cdtime = 60;
	  };
	  
	  
  }
  prevkekw = kekw;
  canvasCtx.restore();
  
  
};
