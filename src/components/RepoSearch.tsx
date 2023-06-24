import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchRepo } from "../store/actions/repoSearch";

const RepoSearch = () => {
  const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const { data, loading, err } = useTypedSelector((state) => state.repository);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setKey(e.target.value);
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const fetchRepoActionCreator = bindActionCreators(fetchRepo, dispatch);
    fetchRepoActionCreator(key);
  };
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} />
      <button>Search</button>
      {err && <h3>{err}</h3>}
      {loading && <h3>Loading...</h3>}
      {!err && !loading && (
        <ul>
          {data.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default RepoSearch;
