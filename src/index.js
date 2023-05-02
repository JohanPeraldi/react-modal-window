import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import ModalWindow from './lib/ModalWindow/ModalWindow';

const App = () => {
  // Modal window state and handlers
  const [showModal, setShowModal] = useState(false);

  // Add modal-open class to body when modal is open to prevent scrolling
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showModal]);

  // Modal window handlers
  function handleCloseModal() {
    console.log('Clicked close modal button');
    setShowModal(false);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  // The message to display in the modal window
  const message = 'Display your message here!';
  // Add a message with lorem ipsum text containing 20 words
  // const message =
  ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias molestiae perspiciatis omnis reprehenderit quo, in impedit rerum animi natus inventore.');

  return (
    <>
      <div>React Modal Component</div>
      <button onClick={handleShowModal}>Open modal window</button>
      {showModal && (
        <ModalWindow handleCloseModal={handleCloseModal} message={message} />
      )}
    </>
  );
};

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
