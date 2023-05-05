<%-- 
    Document   : logout
    Created on : 03-Apr-2017, 14:25:15
    Author     : Abhishek
--%>
<%
//invalidate session
session.invalidate();
response.sendRedirect("index.jsp");
%>
