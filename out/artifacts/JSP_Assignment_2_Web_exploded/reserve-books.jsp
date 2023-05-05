<%@ page import="java.sql.*" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
  <title>Reserved Books</title>
</head>
<body>
<h1>Your Reserved Books</h1>
<%
    int userId = (int) session.getAttribute("user_id");
    Connection conn;
    Statement st;
    ResultSet rs;

    Class.forName("com.mysql.jdbc.Driver");
    conn = java.sql.DriverManager.getConnection("jdbc:mysql://localhost/demo?useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true", "root", "ww0802wwSWA");
    st = conn.createStatement();

    String query = "SELECT * FROM books WHERE user_id = " + userId;
    rs = st.executeQuery(query);

    while (rs.next()) {
      int bookId = rs.getInt("id");
      String title = rs.getString("title");
      String author = rs.getString("author");
      boolean isAvailable = rs.getBoolean("is_available");
%>
<div>
  <h3><%= title %></h3>
  <p>Author: <%= author %></p>
  <p>Status: <%= isAvailable ? "Available" : "Reserved" %></p>
</div>
<%
  }
%>
</body>
</html>
