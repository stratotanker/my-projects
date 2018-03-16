package Day2.classandobject;

import javax.swing.JFrame;

public class ClientFileMain {

	public static void main(String[] args) {
		// INTERMEDIATE JAVA 10 ... 0 CLIENT
		// SECOND HALF
		Client sajda = new Client("127.0.0.1");
		sajda.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		sajda.startRunning();	
	}
}
