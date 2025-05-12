import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import axios from 'axios';

const DeliveryConfirmation = ({ orderId, onSuccess }) => {
  const sigCanvas = useRef({});
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const handleSubmit = async () => {
    if (sigCanvas.current.isEmpty()) {
      setError('Please provide a signature');
      return;
    }
    
    setLoading(true);
    try {
      // Get base64 encoded PNG of the signature
      const signatureData = sigCanvas.current.toDataURL('image/png');
      
      const response = await axios.put(`/api/orders/${orderId}/track`, {
        signature: signatureData,
        deliveryNotes: notes,
        orderStatus: 'Delivered'
      });
      
      if (response.data.success) {
        if (onSuccess) onSuccess(response.data.order);
      }
    } catch (err) {
      setError('Failed to submit signature. Please try again.');
      console.error('Signature submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="delivery-confirmation">
      <h3>Delivery Confirmation</h3>
      
      <div className="signature-container">
        <label>Please sign to confirm delivery:</label>
        <SignatureCanvas 
          ref={sigCanvas}
          penColor="black"
          canvasProps={{ 
            className: 'signature-canvas',
            width: 500,
            height: 200
          }}
        />
        <button type="button" onClick={clearSignature}>Clear</button>
      </div>
      
      <div className="notes-container">
        <label>Delivery Notes (Optional):</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any notes about the delivery"
        />
      </div>
      
      {error && <p className="error">{error}</p>}
      
      <button 
        type="button" 
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Confirm Delivery'}
      </button>
    </div>
  );
};

export default DeliveryConfirmation;