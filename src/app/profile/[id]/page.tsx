interface UserProfileProps {
  params: { id: string };
}

export default function UserProfile({ params }: UserProfileProps) {
  return (
    <div>
      UserProfile <span>{params.id}</span>
    </div>
  );
}
