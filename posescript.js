const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
var kekw = 0;
var prevkekw = 0;
var centery = 0;
var comm = 0;
var cdtime = 0;
var cdtime2 = 0;
var center_update = 0;
var center_refresh = 0;
var audioshoot = new Audio('KEK.wav');
// BlazePose initialisation
function onResults(results) {
  comm = 0;
  center_refresh++;
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
    results.image, 0, 0, canvasElement.width, canvasElement.height);
  drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
    color: '#00FF00',
    lineWidth: 4
  });
  drawLandmarks(canvasCtx, results.poseLandmarks, {
    color: '#FF0000',
    lineWidth: 2
  });
  // Saving relevant variables
  sessionStorage.setItem("Nose", results.poseLandmarks[0]['y']);
  const kekw = results.poseLandmarks[10]['y'];
  center_update = center_update + kekw
  // Check if the mouth is visible and whether the character activity is not on cooldown
  if (kekw != 0 && cdtime <= 0 && comm == 0) {
    // Jump if the y-coordinate of the nose in the current frame is higher than the average y-coordinate of the last 5 frames (+ an additional bias of -0.03)
    if ((kekw - centery) < -0.03) {
      console.log("Spring");
      cdtime = 30;
      jump()
    }
    // Duck if the y-coordinate of the left hand in the current frame is higher than the y-coordinate of the left shoulder in the current frame 
    else if (results.poseLandmarks[19]['y'] < results.poseLandmarks[11]['y']) {
      console.log("Buk");
      cdtime = 30;
      comm = -1;
      jumpdown()
    }
  }
  // take the first frame as the first center
  else if (prevkekw == 0) {
    centery = kekw;
  }
  // Reduce the remaining cooldown time if the user is not jumping or ducking.
  else {
    cdtime--;
    comm = 0;
  };
  // Update the center every 5 frames
  if ((center_refresh % 5) == 0) {
    centery = center_update / 5;
    center_update = 0;
  };
  // Shoot if the y-coordinate of the right hand in the current frame is higher than the y-coordinate of the right shoulder in the current frame 
  if ((cdtime2 <= 0) && (results.poseLandmarks[19]['y'] || results.poseLandmarks[20]['y'])) {
    if ((results.poseLandmarks[20]['y'] < results.poseLandmarks[12]['y'])) {
      cdtime2 = 10;
      console.log("Shoot");
      audioshoot.play();
      shoot();
    };
   // reduce the shooting cooldown if the user is not shooting.
  } else {
    cdtime2--;
  }
  prevkekw = kekw;
  canvasCtx.restore();
};

const pose = new Pose({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
  }
});
pose.setOptions({
  upperBodyOnly: true,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
pose.onResults(onResults);
const camera = new Camera(videoElement, {
  onFrame: async () => {
    await pose.send({
      image: videoElement
    });
  },
  width: 720,
  height: 480
});
camera.start();
