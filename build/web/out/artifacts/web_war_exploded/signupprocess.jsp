<%@ page import="java.sql.*" %>
<%
    String firstname = request.getParameter("fname");
    String lastname = request.getParameter("lname");
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    out.println("Firstname: " + firstname);
    out.println("Lastname: " + lastname);
    out.println("Username: " + username);
    out.println("Password: " + password);

    if (firstname == null || firstname.isEmpty() || lastname == null || lastname.isEmpty() || username == null || username.isEmpty() || password == null || password.isEmpty()) {
        out.println("All fields are required!");
        return;
    }

    // Add the following lines to create a connection
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/demo?useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true", "root", "ww0802wwSWA");

    String sql = "INSERT INTO users (fname, lname, username, password) values (?, ?, ?, ?)";
    PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
    pstmt.setString(1, firstname);
    pstmt.setString(2, lastname);
    pstmt.setString(3, username);
    pstmt.setString(4, password);

    // Execute the update and retrieve the generated user ID
    pstmt.executeUpdate();
    ResultSet generatedKeys = pstmt.getGeneratedKeys();
    int userId = 0;
    if (generatedKeys.next()) {
        userId = generatedKeys.getInt(1);
    }

    // Close resources
    generatedKeys.close();
    pstmt.close();
    conn.close();

    // Redirect to another page
    if (userId > 0) {
        session = request.getSession();
        session.setAttribute("user_id", userId);
        response.sendRedirect("game.jsp");

    }
%>
