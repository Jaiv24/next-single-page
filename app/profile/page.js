import Image from 'next/image';
export default function Profile() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Profile</h1>
            <p>This is the profile page of the Social Media App.</p>

            <Image src="/profile-image.jpg" alt="Profile Image" width={300} height={200} />
        </div>
    );
}