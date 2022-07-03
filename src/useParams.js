export const useParams = () => {
  const history = window.history;
  const location = window.location;

  return { history, location };
};
