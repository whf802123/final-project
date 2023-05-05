<%
    java.sql.Connection conn;
    java.sql.ResultSet rs;
    java.sql.Statement st;
    Class.forName("com.mysql.jdbc.Driver");
    conn = java.sql.DriverManager.getConnection("jdbc:mysql://localhost/demo?useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true", "root", "ww0802wwSWA");
    st = conn.createStatement();

    String firstname = request.getParameter("fname");
    String lastname = request.getParameter("lname");
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    String qr = "SELECT user_id, username FROM users WHERE username = '"+username+"' and password = '"+password+"'";

    rs = st.executeQuery(qr);
    if(rs.next())
    {
        int userId = rs.getInt("user_id"); // Retrieve user_id
        session.setAttribute("uname", username);
        session.setAttribute("user_id", userId); // Set user_id as session attribute
        response.sendRedirect("game.jsp");

    }
    else
    {
        response.sendRedirect("index.jsp?c");
    }
%>
