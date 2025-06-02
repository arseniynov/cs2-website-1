export const getTypeColor = (type: string): string => {
  switch (type) {
    case "release":
      return "bg-blue-500";
    case "major":
      return "bg-orange-500";
    case "esports":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};
