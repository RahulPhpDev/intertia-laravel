import AnchorButton from "@/Components/AnchorButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
const Index = ({ records }) => {
    return (
        <>
            <AuthenticatedLayout>
                <div className="relative overflow-x-auto mt-10">
           
                    <AnchorButton className="bg-blue-300" href = {route('admin.state.create')} > Add State </AnchorButton>
         
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {records?.map((record) => {
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">$2999</td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
