from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests,
        # due to we need to decrease the quantity of the product,
        # we'll always allow PUT requests too.
        if request.method in permissions.SAFE_METHODS or request.method == 'PUT':
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user


class IsStaffOrTargetUser(permissions.BasePermission):
    def has_permission(self, request, view):
        # allow user to list all users if logged in user is staff
        return view.action == 'retrieve' or request.user.is_staff

    def has_object_permission(self, request, view, obj):
        # allow logged in user to view own details,
        # allows staff to view all records.
        return obj == request.user or request.user.is_staff
