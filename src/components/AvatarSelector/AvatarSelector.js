import React from 'react';

class AvatarSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                avatar_location: 'resources/img/avatars/'
        };
    }

    onAvatarClick (e) {
            var avatarImage = this.state.avatar_location + e + '.png';
            this.props.onAvatarSelect(avatarImage);
    };

    render() {
        return (
            <div class="right-login-card">
                <label>Choose Cover Image</label>
                <div class="flex-container-login">
                    <div class="avatar-selection" data-avatar="4.png"><img src="img/avatars/4.png"></img></div>
                    <div onClick={event => this.onAvatarClick(event.target.dataset.holder)}><img data-holder='4' src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                </div>
            </div>
        );
    }
}

export default AvatarSelector;
