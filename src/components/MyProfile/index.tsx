import "./my-profile.scss";

function MyProfile(): JSX.Element {
    return (
        <div className="profile-card">
            <img
                className="profile-card__avatar"
                src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                alt=""
            />
            <p className="profile-card__full-name">Phạm Việt Tú</p>
            <p className="profile-card__email">phamviettu3009@gmail.com</p>
        </div>
    );
}

export default MyProfile;
