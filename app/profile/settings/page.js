import Image from 'next/image';

export default function Settings() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Settings</h1>
      <p>Update your profile settings here.</p>
      <Image src="/settings-image.jpg" alt="Settings Image" width={300} height={200} />
    </div>
  );
}