describe('Test login_container', () => {
    it('should contain a div with container class', () => {
        const comp = shallow(<LoginContainer />);
        expect(comp.contains(<div className="container">hello</div>)).toBe(true);
    });
});
