package Day2.classandobject;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;
public class ReadFile extends JFrame {
	// INTERMEDIATE JAVA 31 ... 23 WEB BROWSER

// ADDRESS BAR AND THE WINDOW
	private JTextField addressBar;
	private JEditorPane display ;
	public ReadFile(){// constructor
		super ("Mora Browser");// browser = FIREFOX or WHATEVER
		addressBar = new JTextField("enter a URL hoss !");// DEFAULT TEXT
		addressBar.addActionListener(// AFTER PRESSING ENTER
				new ActionListener(){
					public void actionPerformed(ActionEvent event){
						loadCrap(event.getActionCommand());}});
		// TAKE ADDRESS TEXTFIELD,PASS IT IN
		add(addressBar , BorderLayout.NORTH);
       // NOW FOR DISPLAY ORDER
		display = new JEditorPane ();
		display.setEditable(false);// YOU CANT CHANGE SITE CONTENT , ONLY VIEW IT
		display.addHyperlinkListener(// PASS RELATED LINKS IN THE loadCrap
				new HyperlinkListener(){
					public void hyperlinkUpdate(HyperlinkEvent event){
						if(event.getEventType()==HyperlinkEvent.EventType.ACTIVATED){
							loadCrap(event.getURL().toString());}}});
		add(new JScrollPane(display) , BorderLayout.CENTER);
		setSize(500 , 300);	setVisible(true);}
	// loadCrap to display on the screen
	// PRIVATE : WE WILLNOT USE IT IN ANY CLASS
	private void loadCrap(String userText){
		try{	display.setPage(userText);
			// AT LAST EVEN http: IS OK OK
			addressBar.setText(userText);
		}catch(Exception e){
			System.out.println("crap !");}}}
