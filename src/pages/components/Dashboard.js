import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const fetchMessages = async () => {
  const response = await fetch("https://youtube-portfolio-backend.vercel.app/messages");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const deleteMessage = async (id) => {
  const response = await fetch(`https://youtube-portfolio-backend.vercel.app/messages/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  const {
    data: messages,
    error,
    isLoading,
  } = useQuery({ queryKey: ["messages"], queryFn: fetchMessages });

  const mutation = useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["messages"]);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!user) {
    return <></>;
  }
  return (
    <div>
      <div
        className="p-6 bg-gray-100 min-h-screen md:max-w-[1200px] w-full mx-auto my-4 rounded"
        id="Dashboard"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>

        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {messages
                ?.slice()
                .reverse()
                .map((msg) => (
                  <tr key={msg._id} className=" bg-gray-800 rounded text-white">
                    <td className="px-6 py-4 whitespace-nowrap">{msg.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{msg.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {msg.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(msg.uploatedTime).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => mutation.mutate(msg._id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
