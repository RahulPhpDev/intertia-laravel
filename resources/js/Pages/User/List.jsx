import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import DeleteUserForm from './Partials/DeleteUserForm';
// import UpdatePasswordForm from './Partials/UpdatePasswordForm';
// import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function List({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
        <Head>
            <title>About - My app</title>
            <meta name="description" content="Your page description" />

            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {/* {{users}} */}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {users.map(user =>    
                                 <tr>
                                 <td>{user.name}</td>
                                 </tr>
                                    )}
                                   
                                        </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
