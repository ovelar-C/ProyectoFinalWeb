import useGetAllUser from "../hooks/useGetAllUser"

export default function ListUser() {
    const datos = useGetAllUser() || [];
    return (
        <>
            <main>
                <ul>
                    {datos?.map((user) => (
                        <li key={user._id}>
                            <span>{user.username}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}