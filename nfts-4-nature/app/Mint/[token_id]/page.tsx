export default function Page({ params }: { params: { token_id: string } }) {
    return <div>My Post: {params.token_id}</div>
  }