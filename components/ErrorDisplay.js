const ErrorDisplay = ({ errors }) => {
  if (!errors || errors.length === 0) {
    return null;
  }
  
  return (
    <div className='alert alert-danger'>
      <h4>Errors:</h4>
      <ul>
        {errors.map(error => <li key={error.message}>{error.message}</li>) }
      </ul>
    </div>
  );
}

export default ErrorDisplay;