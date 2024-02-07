var video = videojs("my-video");
function play() {
  video.play();
}
function pause() {
  video.pause();
}
function stop() {
  video.pause();
  video.currentTime(0);
}
function jumpForward() {
  video.currentTime(video.currentTime() + 5);
}
function jumpBackward() {
  video.currentTime(video.currentTime() - 5);
}
