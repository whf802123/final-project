<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Reserve Book</title>
</head>
<body>
<%
    if (session.getAttribute("uname") != null && session.getAttribute("user_id") != null) {
      int userId = (int) session.getAttribute("user_id");
      int bookId = Integer.parseInt(request.getParameter("book_id"));

      // Connect to the database
      java.sql.Connection conn;
      java.sql.PreparedStatement pstmt;

      Class.forName("com.mysql.jdbc.Driver");
      conn = java.sql.DriverManager.getConnection("jdbc:mysql://localhost/demo?useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true", "root", "ww0802wwSWA");

      // Reserve the book by inserting a new reservation record
      String query = "INSERT INTO reservations (user_id, book_id) VALUES (?, ?)";
      pstmt = conn.prepareStatement(query);
      pstmt.setInt(1, userId);
      pstmt.setInt(2, bookId);
      pstmt.executeUpdate();

      // Update the book's availability status
      query = "UPDATE books SET is_available = false WHERE id = ?";
      pstmt = conn.prepareStatement(query);
      pstmt.setInt(1, bookId);
      pstmt.executeUpdate();

      // Close the statement and connection
      pstmt.close();
      conn.close();

      // Redirect to the home page after successful reservation
      response.sendRedirect("home.jsp");
    } else {
      // Redirect to the login page if the user_id attribute is not set
      response.sendRedirect("index.jsp");
    }
%>
</body>
</html>
