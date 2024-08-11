import React from "react";

const ListSong = () => {
    return(
        <>
            <div className="col-span-2 bg-blue-700">
                <table className="table-auto w-full h-12">
                    <thead className="text-white">
                        <tr>
                            <th className="w-[10%]">#</th>
                            <th className="text-left">Title</th>
                            <th className="w-[10%]">Artist</th>
                            <th className="w-[10%]"><i className="fa fa-download"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td className="text-left">Anh khac hay em khac</td>
                            <td className="text-center">1</td>
                            <td className="text-center">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListSong;