import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Task {
  id: string;
  title: string;
  fecha: string;
  color: string;
}
const tasks: Task[] = [
  { id: '1', title: 'Cita con el Médico', fecha: 'Aug 28', color: '#00C6FF' },
  { id: '2', title: 'Reunión Familiar', fecha: 'Sep 1', color: '#7FBA00' },
  { id: '3', title: 'Ir de Compras', fecha: 'Aug 24', color: '#DD4B39' },
  { id: '4', title: 'Visita a mi Padre', fecha: 'Aug 28', color: '#FF3D00' },
  { id: '5', title: 'Viaje', fecha: 'Sep 3', color: '#FF4081' },
];

const TasksScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Task }) => (
    <View style={[styles.taskContainer, { borderLeftColor: item.color }]}>
      <View style={styles.taskDetails}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskFecha}>{item.fecha}</Text>
      </View>
      <View style={styles.taskAction}>
        <TouchableOpacity style={[styles.actionButton, styles.buttonEditar]}>
          <Icon name="edit" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.buttonBorrar]}>
          <Icon name="delete" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Tarea</Text>
      <TouchableOpacity style={styles.aggButtom}>
        <Text style={styles.aggButtonText}>+</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  aggButtom: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aggButtonText: {
    color: '#FFFFFF',
    fontSize: 30,
    lineHeight: 30,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 15,
    borderLeftWidth: 5,
  },
  taskDetails: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskFecha: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
  },
  taskAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonEditar: {
    backgroundColor: '#F0BD10',
  },
  buttonBorrar: {
    backgroundColor: '#A00000',
  },
})

export default TasksScreen;
