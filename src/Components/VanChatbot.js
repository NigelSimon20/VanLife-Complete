
import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { vans } from '../VansData';


const theme = {
  background: '#115E59',
  fontFamily: 'variant',
  headerBgColor: '#0A5550',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#52A49E',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const suggestVans = (values) => {
  const { vanType, seats } = values;
  return vans
    .filter((van) => van.type === vanType && van.seats >= seats)
    .map((van) => `${van.name} - ${van.price}`)
    .join(', ');
};

const VanChatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      {/* Message Icon */}
      <div
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '20px',
          backgroundColor: '#115E59',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#fff',
          fontSize: '24px',
        }}
      >
        💬
      </div>

      {/* Chatbot */}
      {isChatbotOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '235px',
            right: '55px',
            width: '300px',
            height: '400px',
            zIndex: 1000,
          }}
        >
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={[
                {
                  id: '1',
                  message: 'Welcome! What type of van are you looking for?',
                  trigger: 'vanType',
                },
                {
                  id: 'vanType',
                  options: [
                    { value: 'Cargo', label: 'Cargo Van', trigger: '2' },
                    { value: 'Passenger', label: 'Passenger Van', trigger: '2' },
                  ],
                },
                {
                  id: '2',
                  message: 'How many seats do you need?',
                  trigger: 'seats',
                },
                {
                  id: 'seats',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: ({ previousValue, steps }) => {
                    const vanSuggestions = suggestVans({
                      vanType: steps.vanType.value,
                      seats: parseInt(previousValue),
                    });

                    return vanSuggestions
                      ? `Here are some options: ${vanSuggestions}`
                      : 'Sorry, no vans match your criteria.';
                  },
                  end: true,
                },
              ]}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default VanChatbot;
