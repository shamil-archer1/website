function makeRequestWithUserGesture() {
  var promise = document.requestStorageAccess();
  promise.then(
    function () {
      // Storage access was granted.
    },
    function () {
      // Storage access was denied.
    }
  );
}