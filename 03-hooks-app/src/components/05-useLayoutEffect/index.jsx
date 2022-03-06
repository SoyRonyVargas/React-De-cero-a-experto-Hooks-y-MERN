import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import React , { useLayoutEffect , useRef } from "react";

const MultipleHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const ref = useRef();

  useLayoutEffect( () => {

    console.log(ref.current.getBoundingClientRect());

  }, [quote])

  return (
    <div className="">
      <h1>useLayoutEffect</h1>
      <hr />
      <figure className="card p-3">
        <blockquote className="blockquote">
          <p ref={ref}> {quote} </p>
        </blockquote>
      </figure>
      <button onClick={increment} className="btn btn-primary">
        Next Quote
      </button>
    </div>
  );
};

export default MultipleHooks;
