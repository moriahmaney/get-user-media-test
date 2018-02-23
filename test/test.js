describe('getUserMedia', function () {
    it('getUserMedia', () => {
        return navigator.mediaDevices.getUserMedia({audio: true, video: true, fake: true})
        .then(() => console.log('success'))
        .catch((err) => console.error(err));
    });
});