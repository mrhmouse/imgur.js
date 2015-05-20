import Imgur from '../../lib/imgur';
let imgur = Imgur('testKey');

describe('Image Endpoint', () => {
    describe('GET', () => {
        let hash = 'ep6zWD9';
        let cbSpy;

        describe('GET function', () => {
            beforeEach(() => {
                cbSpy = spy();
                spy(imgur.image, 'get');
                imgur.image.get(hash, cbSpy);
            });

            it('should have been run once', () => {
                expect(imgur.image.get).to.have.been.calledOnce;
            });

            it('should have been run with a hash', () => {
                expect(imgur.image.get).to.have.been.calledWith(hash);
            });

        });

        describe('GET function call to imgurMethod', () => {
            beforeEach(() => {
                cbSpy = spy();
                spy(imgur.image, 'imgurMethod');
                imgur.image.get(hash, cbSpy);
            });


            it('should call imgurMethod', () => {
                expect(imgur.image.imgurMethod).to.have.been.calledOnce;
            });

            it('should call imgurMethod', () => {
                expect(imgur.image.imgurMethod).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    cb: cbSpy,
                    path: 'image/' + hash,
                    method: "get"
                });
            });
        });
    });
});