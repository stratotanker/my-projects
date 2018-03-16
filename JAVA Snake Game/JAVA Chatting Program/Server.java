package Day2.classandobject;
import java.io.*;
import java.net.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class Server extends JFrame {
	// INTERMEDIATE JAVA 22 ... 11 SERVER
	// FIRST HALF
	private JTextField userText ;
	private JTextArea chatWindow ;
	private ObjectOutputStream output ;// YOU ASK
	private ObjectInputStream input ;// HE REPLY
	private ServerSocket server ;// GANGBANG PC
	private Socket connection ; // GET READY TO GET HIGH
	// constructor
	public Server (){
		super(" Mora Instant Messenger");
		userText = new JTextField ();
		userText.setEditable(false);// YOU CANNOT HIT ENTER ON null
		userText.addActionListener(
				new ActionListener (){
					public void actionPerformed(ActionEvent event){
						sendMessage(event.getActionCommand());
						userText.setText("");
					}
				}
				
				);
		add(userText ,BorderLayout.NORTH);
		chatWindow = new JTextArea();
		add( new JScrollPane(chatWindow));
		setSize(300,150);
		setVisible(true);
		
		
	}
	// set up and run the server
	public void startRunning (){
		try{
			server = new ServerSocket(6789,100);
			while(true){
				try{
					waitForConnection();
					setupStreams();
					whileChatting();
				}catch(EOFException eofException){
					showMessage("\n Server ended the connection !");
					// END OF CHATTING 
				}finally {
					closeCrap();
				}
			}
		}catch (IOException ioException){
			ioException.printStackTrace();
		}
	}
	// wait for connection , then display connection information
	private void waitForConnection () throws IOException {
		showMessage (" Waiting for someone to connect ... ");
		connection = server.accept();
		// HOW ABOUT NOW ?, NOW ?, OK,YEAH ,,, FOR UNCOUNTABLE TIMES
		showMessage (" Now connected to " + connection.getInetAddress().getHostName ());
	}
	// get stream to send and receive data
	private void setupStreams() throws IOException{
		output = new ObjectOutputStream(connection.getOutputStream());
		output.flush();// IN ONE WAY ONLY
		input = new ObjectInputStream(connection.getInputStream ());
		showMessage("\n Streams are now setup ! \n ");
	}
	// during the chat conversation
	private void whileChatting () throws IOException{
		String message = " You Are connected Now Fellow !!!";
		sendMessage (message);
// PRE sendMessage PROMPT ARE GOING TO SEND DURING ACTUAL CHATTING
		ableToType(true);
		do{
			//have a conversation
			try{
				message = (String) input.readObject();
				showMessage("\n " + message);// HE REPLY
			}catch( ClassNotFoundException classNotFound){
				showMessage("\n idk wtf that user send !");//HE REPLY
			}
		}while( ! message.equals("CLIENT - END"));
	}
	// close streams and sockets after you are done chatting
	private void closeCrap(){
		showMessage("\n Closing connections ... \n");
		ableToType(false);
		try{
			output.close();// NO SEND
			input.close();// NO RECEIVE  
			connection.close();// NO SOCKET
		}catch( IOException ioException){
			ioException.printStackTrace();
		}
	}
	
	
	private void sendMessage(String message){
		try{
			output.writeObject("SERVER -" + message);
			output.flush();// CLEAN ALL PYTES
			showMessage("\nSERVER -" + message);//SEE WHAT YOU HAVE SEND
		}catch(IOException ioException){
			chatWindow.append("\n ERROR : DUDE I CANT SEND THAT MESSAGE");
		}
	}
	// updates chatWindow
	private void showMessage (final String text){
		SwingUtilities.invokeLater(// UPDATE GUIs
			new Runnable(){
				public void run(){// RECEIVE ONE 4 ME
					chatWindow.append(text);
				}
			}
		);
	}
	//let user type stuff into their box
	private void ableToType(final boolean tof){// true or false
		SwingUtilities.invokeLater(// UPDATE GUIs
				new Runnable(){
					public void run(){// SEND LINE 2 HIM
					  userText.setEditable(tof);
					}
				}
			);

	}
}
