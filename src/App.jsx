// import { useReducer } from 'react';
import { useReducer } from 'react';
import './App.css'

function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    education: "",
    pcs: 0,
    feedback: "",
    term: false
  };


  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value
        };
      case "TOGGLE":
        return {
          ...state,
          term: !state.term
        };
      case "INCREMENT":
        return {
          ...state,
          pcs: state.pcs + 1
        };
      case "DECREMENT":
        return {
          ...state,
          pcs: state.pcs - 1
        }
      default:
        return state
    }

  }


  const [state, dispatch] = useReducer(reducer, initialState)


  const handleSubmit = () => {
    console.log(state);
  }
  return (
    <>
      <div

        className='flex flex-col w-[600px] h-[700px] p-10 shadow-lg shadow-red-300  '>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-start text-start'>
            <label htmlFor="">First Name</label>
            <input
              name='firstName' className='bg-gray-200 p-2 rounded' placeholder='Enter Your First Name' type="text"
              onBlur={(e) => dispatch({
                type: 'INPUT',
                payload: { name: e.target.name, value: e.target.value }
              })} />
          </div>

          <div className='flex flex-col justify-start text-start'>
            <label htmlFor="">Last Name</label>
            <input
              onBlur={(e) => dispatch({
                type: 'INPUT',
                payload: { name: e.target.name, value: e.target.value }
              })}
              name='lastName' className='bg-gray-200 p-2 rounded ' placeholder='Enter Your Last Name' type="text" />
          </div>
        </div>

        <div className='flex justify-between  mt-5'>
          <div className='flex flex-col justify-start text-start'>
            <label htmlFor="">Email</label>
            <input
              onBlur={(e) => dispatch({
                type: 'INPUT',
                payload: { name: e.target.name, value: e.target.value }
              })}
              name='email' className='bg-gray-200 p-2 rounded' placeholder='Enter Your Email' type="email" />
          </div>

          <div className='flex  flex-col text-start'>
            <div>
              <label htmlFor="">Gender</label>
            </div>
            <div className='flex flex-row p-2 '>
              <div className='flex justify-center items-center gap-2 mr-1'>
                <input
                  onClick={(e) => dispatch({
                    type: 'INPUT',
                    payload: { name: e.target.name, value: e.target.value }
                  })}
                  name='gender' className='w-4 h-4' type="radio" value="male" /> <span>Male</span>
              </div>
              <div className='flex justify-center items-center gap-2 mr-1'>
                <input
                  onClick={(e) => dispatch({
                    type: 'INPUT',
                    payload: { name: e.target.name, value: e.target.value }
                  })}
                  name='gender' className='w-4 h-4' type="radio" value="female" /> <span>Female</span>
              </div>
              <div className='flex justify-center items-center gap-2 mr-1'>
                <input
                  onClick={(e) => dispatch({
                    type: 'INPUT',
                    payload: { name: e.target.name, value: e.target.value }
                  })}
                  name='gender' className='w-4 h-4' type="radio" value="others" /> <span>Others</span>
              </div>
            </div>
          </div>
        </div>


        <div className='flex justify-between mt-5'>
          <div className='flex flex-col justify-start text-start'>
            <label htmlFor="">Education</label>
            <select
              onChange={(e) => dispatch({
                type: 'INPUT',
                payload: { name: e.target.name, value: e.target.value }
              })}
              name="education" className='bg-gray-200 p-2 rounded pr-[109px]'>
              <option value="ssc">SSC</option>
              <option value="hsc">HSC</option>
              <option value="underGrade">Under Grade</option>
              <option value="graduation">Graduation</option>
            </select>
          </div>

          <div className='flex flex-col justify-center items-start '>
            <label className='' htmlFor="">Number of PCs</label>
            <div className='flex flex-row '>
              <button
                onClick={() => dispatch({ type: "DECREMENT" })}
                className='bg-blue-500 mr-1'>
                -
              </button>
              <p className='bg-gray-300 p-2 rounded text-center w-[132px]'>{state.pcs}</p>
              <button
                onClick={() => dispatch({ type: "INCREMENT" })}
                className='bg-blue-500 ml-1'>
                +
              </button>
            </div>
          </div>
        </div>


        <div className='text-start'>
          <label htmlFor="">Feedback</label>
          <textarea
            onBlur={(e) => dispatch({
              type: 'INPUT',
              payload: { name: e.target.name, value: e.target.value }
            })}
            name="feedback" className='bg-gray-300 rounded p-2' cols="58" rows="10"></textarea>
          <div className='flex justify-between mt-5'>
            <div className='flex justify-center items-center gap-2'>
              <input
                onClick={() => dispatch({
                  type: 'TOGGLE',

                })}
                name="term" className='w-4 h-4' type="checkbox" /> <span>I agree to terms and conditions</span>
            </div>
            <input disabled={!state.term} onClick={handleSubmit} className='px-4 py-1 rounded bg-blue-500   disabled:bg-gray-500 disabled:opacity-50' type="submit" value="Submit" />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
